
/**
* @description mocks_v3:mockEC2 module is mocks for AWS-SDK V3
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

  export const mockEC2 = {
  acceptReservedInstancesExchangeQuote: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptReservedInstancesExchangeQuote', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptReservedInstancesExchangeQuoteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptReservedInstancesExchangeQuote', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptReservedInstancesExchangeQuoteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptReservedInstancesExchangeQuote', 'EC2', Promise.reject(result), true, mock)
  },
  acceptTransitGatewayMulticastDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptTransitGatewayMulticastDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptTransitGatewayMulticastDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayMulticastDomainAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  acceptTransitGatewayPeeringAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptTransitGatewayPeeringAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptTransitGatewayPeeringAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayPeeringAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  acceptTransitGatewayVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptTransitGatewayVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptTransitGatewayVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptTransitGatewayVpcAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  acceptVpcEndpointConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcEndpointConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptVpcEndpointConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcEndpointConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptVpcEndpointConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcEndpointConnections', 'EC2', Promise.reject(result), true, mock)
  },
  acceptVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcPeeringConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  acceptVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcPeeringConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  acceptVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'acceptVpcPeeringConnection', 'EC2', Promise.reject(result), true, mock)
  },
  advertiseByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'advertiseByoipCidr', 'EC2', Promise.resolve(result), true, mock)
  },
  advertiseByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'advertiseByoipCidr', 'EC2', Promise.resolve(result), false, mock)
  },
  advertiseByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'advertiseByoipCidr', 'EC2', Promise.reject(result), true, mock)
  },
  allocateAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateAddress', 'EC2', Promise.resolve(result), true, mock)
  },
  allocateAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateAddress', 'EC2', Promise.resolve(result), false, mock)
  },
  allocateAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateAddress', 'EC2', Promise.reject(result), true, mock)
  },
  allocateHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateHosts', 'EC2', Promise.resolve(result), true, mock)
  },
  allocateHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateHosts', 'EC2', Promise.resolve(result), false, mock)
  },
  allocateHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'allocateHosts', 'EC2', Promise.reject(result), true, mock)
  },
  applySecurityGroupsToClientVpnTargetNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'applySecurityGroupsToClientVpnTargetNetwork', 'EC2', Promise.resolve(result), true, mock)
  },
  applySecurityGroupsToClientVpnTargetNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'applySecurityGroupsToClientVpnTargetNetwork', 'EC2', Promise.resolve(result), false, mock)
  },
  applySecurityGroupsToClientVpnTargetNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'applySecurityGroupsToClientVpnTargetNetwork', 'EC2', Promise.reject(result), true, mock)
  },
  assignIpv6Addresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignIpv6Addresses', 'EC2', Promise.resolve(result), true, mock)
  },
  assignIpv6AddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignIpv6Addresses', 'EC2', Promise.resolve(result), false, mock)
  },
  assignIpv6AddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignIpv6Addresses', 'EC2', Promise.reject(result), true, mock)
  },
  assignPrivateIpAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignPrivateIpAddresses', 'EC2', Promise.resolve(result), true, mock)
  },
  assignPrivateIpAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignPrivateIpAddresses', 'EC2', Promise.resolve(result), false, mock)
  },
  assignPrivateIpAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'assignPrivateIpAddresses', 'EC2', Promise.reject(result), true, mock)
  },
  associateAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateAddress', 'EC2', Promise.resolve(result), true, mock)
  },
  associateAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateAddress', 'EC2', Promise.resolve(result), false, mock)
  },
  associateAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateAddress', 'EC2', Promise.reject(result), true, mock)
  },
  associateClientVpnTargetNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateClientVpnTargetNetwork', 'EC2', Promise.resolve(result), true, mock)
  },
  associateClientVpnTargetNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateClientVpnTargetNetwork', 'EC2', Promise.resolve(result), false, mock)
  },
  associateClientVpnTargetNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateClientVpnTargetNetwork', 'EC2', Promise.reject(result), true, mock)
  },
  associateDhcpOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateDhcpOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  associateDhcpOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateDhcpOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  associateDhcpOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateDhcpOptions', 'EC2', Promise.reject(result), true, mock)
  },
  associateEnclaveCertificateIamRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateEnclaveCertificateIamRole', 'EC2', Promise.resolve(result), true, mock)
  },
  associateEnclaveCertificateIamRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateEnclaveCertificateIamRole', 'EC2', Promise.resolve(result), false, mock)
  },
  associateEnclaveCertificateIamRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateEnclaveCertificateIamRole', 'EC2', Promise.reject(result), true, mock)
  },
  associateIamInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateIamInstanceProfile', 'EC2', Promise.resolve(result), true, mock)
  },
  associateIamInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateIamInstanceProfile', 'EC2', Promise.resolve(result), false, mock)
  },
  associateIamInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateIamInstanceProfile', 'EC2', Promise.reject(result), true, mock)
  },
  associateInstanceEventWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateInstanceEventWindow', 'EC2', Promise.resolve(result), true, mock)
  },
  associateInstanceEventWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateInstanceEventWindow', 'EC2', Promise.resolve(result), false, mock)
  },
  associateInstanceEventWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateInstanceEventWindow', 'EC2', Promise.reject(result), true, mock)
  },
  associateRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  associateRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  associateRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  associateSubnetCidrBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateSubnetCidrBlock', 'EC2', Promise.resolve(result), true, mock)
  },
  associateSubnetCidrBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateSubnetCidrBlock', 'EC2', Promise.resolve(result), false, mock)
  },
  associateSubnetCidrBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateSubnetCidrBlock', 'EC2', Promise.reject(result), true, mock)
  },
  associateTransitGatewayMulticastDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), true, mock)
  },
  associateTransitGatewayMulticastDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), false, mock)
  },
  associateTransitGatewayMulticastDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayMulticastDomain', 'EC2', Promise.reject(result), true, mock)
  },
  associateTransitGatewayRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  associateTransitGatewayRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  associateTransitGatewayRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTransitGatewayRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  associateTrunkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTrunkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  associateTrunkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTrunkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  associateTrunkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateTrunkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  associateVpcCidrBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateVpcCidrBlock', 'EC2', Promise.resolve(result), true, mock)
  },
  associateVpcCidrBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateVpcCidrBlock', 'EC2', Promise.resolve(result), false, mock)
  },
  associateVpcCidrBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'associateVpcCidrBlock', 'EC2', Promise.reject(result), true, mock)
  },
  attachClassicLinkVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachClassicLinkVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  attachClassicLinkVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachClassicLinkVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  attachClassicLinkVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachClassicLinkVpc', 'EC2', Promise.reject(result), true, mock)
  },
  attachInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  attachInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  attachInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  attachNetworkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachNetworkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  attachNetworkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachNetworkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  attachNetworkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachNetworkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  attachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  attachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  attachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVolume', 'EC2', Promise.reject(result), true, mock)
  },
  attachVpnGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVpnGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  attachVpnGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVpnGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  attachVpnGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'attachVpnGateway', 'EC2', Promise.reject(result), true, mock)
  },
  authorizeClientVpnIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeClientVpnIngress', 'EC2', Promise.resolve(result), true, mock)
  },
  authorizeClientVpnIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeClientVpnIngress', 'EC2', Promise.resolve(result), false, mock)
  },
  authorizeClientVpnIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeClientVpnIngress', 'EC2', Promise.reject(result), true, mock)
  },
  authorizeSecurityGroupEgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupEgress', 'EC2', Promise.resolve(result), true, mock)
  },
  authorizeSecurityGroupEgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupEgress', 'EC2', Promise.resolve(result), false, mock)
  },
  authorizeSecurityGroupEgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupEgress', 'EC2', Promise.reject(result), true, mock)
  },
  authorizeSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupIngress', 'EC2', Promise.resolve(result), true, mock)
  },
  authorizeSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupIngress', 'EC2', Promise.resolve(result), false, mock)
  },
  authorizeSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'authorizeSecurityGroupIngress', 'EC2', Promise.reject(result), true, mock)
  },
  bundleInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'bundleInstance', 'EC2', Promise.resolve(result), true, mock)
  },
  bundleInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'bundleInstance', 'EC2', Promise.resolve(result), false, mock)
  },
  bundleInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'bundleInstance', 'EC2', Promise.reject(result), true, mock)
  },
  cancelBundleTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelBundleTask', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelBundleTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelBundleTask', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelBundleTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelBundleTask', 'EC2', Promise.reject(result), true, mock)
  },
  cancelCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservation', 'EC2', Promise.reject(result), true, mock)
  },
  cancelCapacityReservationFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservationFleets', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelCapacityReservationFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservationFleets', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelCapacityReservationFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelCapacityReservationFleets', 'EC2', Promise.reject(result), true, mock)
  },
  cancelConversionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelConversionTask', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelConversionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelConversionTask', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelConversionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelConversionTask', 'EC2', Promise.reject(result), true, mock)
  },
  cancelExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelExportTask', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelExportTask', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelExportTask', 'EC2', Promise.reject(result), true, mock)
  },
  cancelImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelImportTask', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelImportTask', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelImportTask', 'EC2', Promise.reject(result), true, mock)
  },
  cancelReservedInstancesListing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelReservedInstancesListing', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelReservedInstancesListingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelReservedInstancesListing', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelReservedInstancesListingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelReservedInstancesListing', 'EC2', Promise.reject(result), true, mock)
  },
  cancelSpotFleetRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotFleetRequests', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelSpotFleetRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotFleetRequests', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelSpotFleetRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotFleetRequests', 'EC2', Promise.reject(result), true, mock)
  },
  cancelSpotInstanceRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotInstanceRequests', 'EC2', Promise.resolve(result), true, mock)
  },
  cancelSpotInstanceRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotInstanceRequests', 'EC2', Promise.resolve(result), false, mock)
  },
  cancelSpotInstanceRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'cancelSpotInstanceRequests', 'EC2', Promise.reject(result), true, mock)
  },
  confirmProductInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'confirmProductInstance', 'EC2', Promise.resolve(result), true, mock)
  },
  confirmProductInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'confirmProductInstance', 'EC2', Promise.resolve(result), false, mock)
  },
  confirmProductInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'confirmProductInstance', 'EC2', Promise.reject(result), true, mock)
  },
  copyFpgaImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyFpgaImage', 'EC2', Promise.resolve(result), true, mock)
  },
  copyFpgaImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyFpgaImage', 'EC2', Promise.resolve(result), false, mock)
  },
  copyFpgaImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyFpgaImage', 'EC2', Promise.reject(result), true, mock)
  },
  copyImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyImage', 'EC2', Promise.resolve(result), true, mock)
  },
  copyImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyImage', 'EC2', Promise.resolve(result), false, mock)
  },
  copyImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copyImage', 'EC2', Promise.reject(result), true, mock)
  },
  copySnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copySnapshot', 'EC2', Promise.resolve(result), true, mock)
  },
  copySnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copySnapshot', 'EC2', Promise.resolve(result), false, mock)
  },
  copySnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'copySnapshot', 'EC2', Promise.reject(result), true, mock)
  },
  createCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  createCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  createCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservation', 'EC2', Promise.reject(result), true, mock)
  },
  createCapacityReservationFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservationFleet', 'EC2', Promise.resolve(result), true, mock)
  },
  createCapacityReservationFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservationFleet', 'EC2', Promise.resolve(result), false, mock)
  },
  createCapacityReservationFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCapacityReservationFleet', 'EC2', Promise.reject(result), true, mock)
  },
  createCarrierGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCarrierGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createCarrierGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCarrierGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createCarrierGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCarrierGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createClientVpnEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnEndpoint', 'EC2', Promise.resolve(result), true, mock)
  },
  createClientVpnEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnEndpoint', 'EC2', Promise.resolve(result), false, mock)
  },
  createClientVpnEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnEndpoint', 'EC2', Promise.reject(result), true, mock)
  },
  createClientVpnRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  createClientVpnRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  createClientVpnRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createClientVpnRoute', 'EC2', Promise.reject(result), true, mock)
  },
  createCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCustomerGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCustomerGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createCustomerGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createDefaultSubnet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultSubnet', 'EC2', Promise.resolve(result), true, mock)
  },
  createDefaultSubnetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultSubnet', 'EC2', Promise.resolve(result), false, mock)
  },
  createDefaultSubnetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultSubnet', 'EC2', Promise.reject(result), true, mock)
  },
  createDefaultVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  createDefaultVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  createDefaultVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDefaultVpc', 'EC2', Promise.reject(result), true, mock)
  },
  createDhcpOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDhcpOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  createDhcpOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDhcpOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  createDhcpOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createDhcpOptions', 'EC2', Promise.reject(result), true, mock)
  },
  createEgressOnlyInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createEgressOnlyInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createEgressOnlyInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createEgressOnlyInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createEgressOnlyInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createEgressOnlyInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFleet', 'EC2', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFleet', 'EC2', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFleet', 'EC2', Promise.reject(result), true, mock)
  },
  createFlowLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFlowLogs', 'EC2', Promise.resolve(result), true, mock)
  },
  createFlowLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFlowLogs', 'EC2', Promise.resolve(result), false, mock)
  },
  createFlowLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFlowLogs', 'EC2', Promise.reject(result), true, mock)
  },
  createFpgaImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFpgaImage', 'EC2', Promise.resolve(result), true, mock)
  },
  createFpgaImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFpgaImage', 'EC2', Promise.resolve(result), false, mock)
  },
  createFpgaImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createFpgaImage', 'EC2', Promise.reject(result), true, mock)
  },
  createImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createImage', 'EC2', Promise.resolve(result), true, mock)
  },
  createImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createImage', 'EC2', Promise.resolve(result), false, mock)
  },
  createImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createImage', 'EC2', Promise.reject(result), true, mock)
  },
  createInstanceEventWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceEventWindow', 'EC2', Promise.resolve(result), true, mock)
  },
  createInstanceEventWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceEventWindow', 'EC2', Promise.resolve(result), false, mock)
  },
  createInstanceEventWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceEventWindow', 'EC2', Promise.reject(result), true, mock)
  },
  createInstanceExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceExportTask', 'EC2', Promise.resolve(result), true, mock)
  },
  createInstanceExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceExportTask', 'EC2', Promise.resolve(result), false, mock)
  },
  createInstanceExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInstanceExportTask', 'EC2', Promise.reject(result), true, mock)
  },
  createInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createKeyPair', 'EC2', Promise.resolve(result), true, mock)
  },
  createKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createKeyPair', 'EC2', Promise.resolve(result), false, mock)
  },
  createKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createKeyPair', 'EC2', Promise.reject(result), true, mock)
  },
  createLaunchTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplate', 'EC2', Promise.resolve(result), true, mock)
  },
  createLaunchTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplate', 'EC2', Promise.resolve(result), false, mock)
  },
  createLaunchTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplate', 'EC2', Promise.reject(result), true, mock)
  },
  createLaunchTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplateVersion', 'EC2', Promise.resolve(result), true, mock)
  },
  createLaunchTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplateVersion', 'EC2', Promise.resolve(result), false, mock)
  },
  createLaunchTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLaunchTemplateVersion', 'EC2', Promise.reject(result), true, mock)
  },
  createLocalGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  createLocalGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  createLocalGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRoute', 'EC2', Promise.reject(result), true, mock)
  },
  createLocalGatewayRouteTableVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.resolve(result), true, mock)
  },
  createLocalGatewayRouteTableVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.resolve(result), false, mock)
  },
  createLocalGatewayRouteTableVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.reject(result), true, mock)
  },
  createManagedPrefixList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createManagedPrefixList', 'EC2', Promise.resolve(result), true, mock)
  },
  createManagedPrefixListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createManagedPrefixList', 'EC2', Promise.resolve(result), false, mock)
  },
  createManagedPrefixListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createManagedPrefixList', 'EC2', Promise.reject(result), true, mock)
  },
  createNatGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNatGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createNatGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNatGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createNatGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNatGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createNetworkAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAcl', 'EC2', Promise.resolve(result), true, mock)
  },
  createNetworkAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAcl', 'EC2', Promise.resolve(result), false, mock)
  },
  createNetworkAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAcl', 'EC2', Promise.reject(result), true, mock)
  },
  createNetworkAclEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAclEntry', 'EC2', Promise.resolve(result), true, mock)
  },
  createNetworkAclEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAclEntry', 'EC2', Promise.resolve(result), false, mock)
  },
  createNetworkAclEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkAclEntry', 'EC2', Promise.reject(result), true, mock)
  },
  createNetworkInsightsPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInsightsPath', 'EC2', Promise.resolve(result), true, mock)
  },
  createNetworkInsightsPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInsightsPath', 'EC2', Promise.resolve(result), false, mock)
  },
  createNetworkInsightsPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInsightsPath', 'EC2', Promise.reject(result), true, mock)
  },
  createNetworkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  createNetworkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  createNetworkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  createNetworkInterfacePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterfacePermission', 'EC2', Promise.resolve(result), true, mock)
  },
  createNetworkInterfacePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterfacePermission', 'EC2', Promise.resolve(result), false, mock)
  },
  createNetworkInterfacePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createNetworkInterfacePermission', 'EC2', Promise.reject(result), true, mock)
  },
  createPlacementGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createPlacementGroup', 'EC2', Promise.resolve(result), true, mock)
  },
  createPlacementGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createPlacementGroup', 'EC2', Promise.resolve(result), false, mock)
  },
  createPlacementGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createPlacementGroup', 'EC2', Promise.reject(result), true, mock)
  },
  createReplaceRootVolumeTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReplaceRootVolumeTask', 'EC2', Promise.resolve(result), true, mock)
  },
  createReplaceRootVolumeTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReplaceRootVolumeTask', 'EC2', Promise.resolve(result), false, mock)
  },
  createReplaceRootVolumeTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReplaceRootVolumeTask', 'EC2', Promise.reject(result), true, mock)
  },
  createReservedInstancesListing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReservedInstancesListing', 'EC2', Promise.resolve(result), true, mock)
  },
  createReservedInstancesListingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReservedInstancesListing', 'EC2', Promise.resolve(result), false, mock)
  },
  createReservedInstancesListingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createReservedInstancesListing', 'EC2', Promise.reject(result), true, mock)
  },
  createRestoreImageTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRestoreImageTask', 'EC2', Promise.resolve(result), true, mock)
  },
  createRestoreImageTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRestoreImageTask', 'EC2', Promise.resolve(result), false, mock)
  },
  createRestoreImageTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRestoreImageTask', 'EC2', Promise.reject(result), true, mock)
  },
  createRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  createRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  createRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRoute', 'EC2', Promise.reject(result), true, mock)
  },
  createRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  createRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  createRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  createSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSecurityGroup', 'EC2', Promise.resolve(result), true, mock)
  },
  createSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSecurityGroup', 'EC2', Promise.resolve(result), false, mock)
  },
  createSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSecurityGroup', 'EC2', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshot', 'EC2', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshot', 'EC2', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshot', 'EC2', Promise.reject(result), true, mock)
  },
  createSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshots', 'EC2', Promise.resolve(result), true, mock)
  },
  createSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshots', 'EC2', Promise.resolve(result), false, mock)
  },
  createSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSnapshots', 'EC2', Promise.reject(result), true, mock)
  },
  createSpotDatafeedSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSpotDatafeedSubscription', 'EC2', Promise.resolve(result), true, mock)
  },
  createSpotDatafeedSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSpotDatafeedSubscription', 'EC2', Promise.resolve(result), false, mock)
  },
  createSpotDatafeedSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSpotDatafeedSubscription', 'EC2', Promise.reject(result), true, mock)
  },
  createStoreImageTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createStoreImageTask', 'EC2', Promise.resolve(result), true, mock)
  },
  createStoreImageTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createStoreImageTask', 'EC2', Promise.resolve(result), false, mock)
  },
  createStoreImageTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createStoreImageTask', 'EC2', Promise.reject(result), true, mock)
  },
  createSubnet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnet', 'EC2', Promise.resolve(result), true, mock)
  },
  createSubnetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnet', 'EC2', Promise.resolve(result), false, mock)
  },
  createSubnetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnet', 'EC2', Promise.reject(result), true, mock)
  },
  createSubnetCidrReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnetCidrReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  createSubnetCidrReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnetCidrReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  createSubnetCidrReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createSubnetCidrReservation', 'EC2', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTags', 'EC2', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTags', 'EC2', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTags', 'EC2', Promise.reject(result), true, mock)
  },
  createTrafficMirrorFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilter', 'EC2', Promise.resolve(result), true, mock)
  },
  createTrafficMirrorFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilter', 'EC2', Promise.resolve(result), false, mock)
  },
  createTrafficMirrorFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilter', 'EC2', Promise.reject(result), true, mock)
  },
  createTrafficMirrorFilterRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), true, mock)
  },
  createTrafficMirrorFilterRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), false, mock)
  },
  createTrafficMirrorFilterRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorFilterRule', 'EC2', Promise.reject(result), true, mock)
  },
  createTrafficMirrorSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorSession', 'EC2', Promise.resolve(result), true, mock)
  },
  createTrafficMirrorSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorSession', 'EC2', Promise.resolve(result), false, mock)
  },
  createTrafficMirrorSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorSession', 'EC2', Promise.reject(result), true, mock)
  },
  createTrafficMirrorTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorTarget', 'EC2', Promise.resolve(result), true, mock)
  },
  createTrafficMirrorTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorTarget', 'EC2', Promise.resolve(result), false, mock)
  },
  createTrafficMirrorTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTrafficMirrorTarget', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGateway', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnect', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnect', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnect', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnectPeer', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnectPeer', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayConnectPeer', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayMulticastDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayMulticastDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayMulticastDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayMulticastDomain', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayPeeringAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayPeeringAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayPeeringAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPeeringAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayPrefixListReference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayPrefixListReferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayPrefixListReferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayPrefixListReference', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRoute', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  createTransitGatewayVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  createTransitGatewayVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  createTransitGatewayVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createTransitGatewayVpcAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  createVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  createVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  createVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVolume', 'EC2', Promise.reject(result), true, mock)
  },
  createVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpc', 'EC2', Promise.reject(result), true, mock)
  },
  createVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpoint', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpoint', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpoint', 'EC2', Promise.reject(result), true, mock)
  },
  createVpcEndpointConnectionNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointConnectionNotification', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpcEndpointConnectionNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointConnectionNotification', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpcEndpointConnectionNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointConnectionNotification', 'EC2', Promise.reject(result), true, mock)
  },
  createVpcEndpointServiceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointServiceConfiguration', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpcEndpointServiceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointServiceConfiguration', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpcEndpointServiceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcEndpointServiceConfiguration', 'EC2', Promise.reject(result), true, mock)
  },
  createVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcPeeringConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcPeeringConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpcPeeringConnection', 'EC2', Promise.reject(result), true, mock)
  },
  createVpnConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpnConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpnConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnection', 'EC2', Promise.reject(result), true, mock)
  },
  createVpnConnectionRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnectionRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpnConnectionRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnectionRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpnConnectionRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnConnectionRoute', 'EC2', Promise.reject(result), true, mock)
  },
  createVpnGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  createVpnGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  createVpnGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'createVpnGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteCarrierGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCarrierGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteCarrierGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCarrierGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteCarrierGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCarrierGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteClientVpnEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnEndpoint', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteClientVpnEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnEndpoint', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteClientVpnEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnEndpoint', 'EC2', Promise.reject(result), true, mock)
  },
  deleteClientVpnRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteClientVpnRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteClientVpnRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteClientVpnRoute', 'EC2', Promise.reject(result), true, mock)
  },
  deleteCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCustomerGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCustomerGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteCustomerGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteDhcpOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteDhcpOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteDhcpOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteDhcpOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteDhcpOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteDhcpOptions', 'EC2', Promise.reject(result), true, mock)
  },
  deleteEgressOnlyInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteEgressOnlyInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteEgressOnlyInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteEgressOnlyInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteEgressOnlyInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteEgressOnlyInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFleets', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFleets', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFleets', 'EC2', Promise.reject(result), true, mock)
  },
  deleteFlowLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFlowLogs', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteFlowLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFlowLogs', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteFlowLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFlowLogs', 'EC2', Promise.reject(result), true, mock)
  },
  deleteFpgaImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFpgaImage', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteFpgaImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFpgaImage', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteFpgaImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteFpgaImage', 'EC2', Promise.reject(result), true, mock)
  },
  deleteInstanceEventWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInstanceEventWindow', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteInstanceEventWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInstanceEventWindow', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteInstanceEventWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInstanceEventWindow', 'EC2', Promise.reject(result), true, mock)
  },
  deleteInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteKeyPair', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteKeyPair', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteKeyPair', 'EC2', Promise.reject(result), true, mock)
  },
  deleteLaunchTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplate', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteLaunchTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplate', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteLaunchTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplate', 'EC2', Promise.reject(result), true, mock)
  },
  deleteLaunchTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplateVersions', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteLaunchTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplateVersions', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteLaunchTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLaunchTemplateVersions', 'EC2', Promise.reject(result), true, mock)
  },
  deleteLocalGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteLocalGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteLocalGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRoute', 'EC2', Promise.reject(result), true, mock)
  },
  deleteLocalGatewayRouteTableVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteLocalGatewayRouteTableVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteLocalGatewayRouteTableVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteLocalGatewayRouteTableVpcAssociation', 'EC2', Promise.reject(result), true, mock)
  },
  deleteManagedPrefixList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteManagedPrefixList', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteManagedPrefixListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteManagedPrefixList', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteManagedPrefixListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteManagedPrefixList', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNatGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNatGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNatGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNatGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNatGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNatGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAcl', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAcl', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAcl', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkAclEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAclEntry', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkAclEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAclEntry', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkAclEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkAclEntry', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkInsightsAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsAnalysis', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkInsightsAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsAnalysis', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkInsightsAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsAnalysis', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkInsightsPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsPath', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkInsightsPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsPath', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkInsightsPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInsightsPath', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  deleteNetworkInterfacePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterfacePermission', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteNetworkInterfacePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterfacePermission', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteNetworkInterfacePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteNetworkInterfacePermission', 'EC2', Promise.reject(result), true, mock)
  },
  deletePlacementGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deletePlacementGroup', 'EC2', Promise.resolve(result), true, mock)
  },
  deletePlacementGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deletePlacementGroup', 'EC2', Promise.resolve(result), false, mock)
  },
  deletePlacementGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deletePlacementGroup', 'EC2', Promise.reject(result), true, mock)
  },
  deleteQueuedReservedInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteQueuedReservedInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteQueuedReservedInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteQueuedReservedInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteQueuedReservedInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteQueuedReservedInstances', 'EC2', Promise.reject(result), true, mock)
  },
  deleteRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRoute', 'EC2', Promise.reject(result), true, mock)
  },
  deleteRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  deleteSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSecurityGroup', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSecurityGroup', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSecurityGroup', 'EC2', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSnapshot', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSnapshot', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSnapshot', 'EC2', Promise.reject(result), true, mock)
  },
  deleteSpotDatafeedSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSpotDatafeedSubscription', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteSpotDatafeedSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSpotDatafeedSubscription', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteSpotDatafeedSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSpotDatafeedSubscription', 'EC2', Promise.reject(result), true, mock)
  },
  deleteSubnet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnet', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteSubnetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnet', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteSubnetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnet', 'EC2', Promise.reject(result), true, mock)
  },
  deleteSubnetCidrReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnetCidrReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteSubnetCidrReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnetCidrReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteSubnetCidrReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteSubnetCidrReservation', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTags', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTags', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTags', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTrafficMirrorFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilter', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTrafficMirrorFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilter', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTrafficMirrorFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilter', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTrafficMirrorFilterRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTrafficMirrorFilterRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTrafficMirrorFilterRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorFilterRule', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTrafficMirrorSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorSession', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTrafficMirrorSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorSession', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTrafficMirrorSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorSession', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTrafficMirrorTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorTarget', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTrafficMirrorTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorTarget', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTrafficMirrorTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTrafficMirrorTarget', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnect', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnect', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnect', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnectPeer', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnectPeer', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayConnectPeer', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayMulticastDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayMulticastDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayMulticastDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayMulticastDomain', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayPeeringAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayPeeringAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayPeeringAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPeeringAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayPrefixListReference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayPrefixListReferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayPrefixListReferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayPrefixListReference', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRoute', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  deleteTransitGatewayVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteTransitGatewayVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteTransitGatewayVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteTransitGatewayVpcAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVolume', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpc', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpcEndpointConnectionNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointConnectionNotifications', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpcEndpointConnectionNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointConnectionNotifications', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpcEndpointConnectionNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointConnectionNotifications', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpcEndpointServiceConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointServiceConfigurations', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpcEndpointServiceConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointServiceConfigurations', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpcEndpointServiceConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpointServiceConfigurations', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpcEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpoints', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpcEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpoints', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpcEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcEndpoints', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcPeeringConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcPeeringConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpcPeeringConnection', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpnConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpnConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpnConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnection', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpnConnectionRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnectionRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpnConnectionRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnectionRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpnConnectionRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnConnectionRoute', 'EC2', Promise.reject(result), true, mock)
  },
  deleteVpnGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  deleteVpnGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  deleteVpnGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deleteVpnGateway', 'EC2', Promise.reject(result), true, mock)
  },
  deprovisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deprovisionByoipCidr', 'EC2', Promise.resolve(result), true, mock)
  },
  deprovisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deprovisionByoipCidr', 'EC2', Promise.resolve(result), false, mock)
  },
  deprovisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deprovisionByoipCidr', 'EC2', Promise.reject(result), true, mock)
  },
  deregisterImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterImage', 'EC2', Promise.resolve(result), true, mock)
  },
  deregisterImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterImage', 'EC2', Promise.resolve(result), false, mock)
  },
  deregisterImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterImage', 'EC2', Promise.reject(result), true, mock)
  },
  deregisterInstanceEventNotificationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), true, mock)
  },
  deregisterInstanceEventNotificationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), false, mock)
  },
  deregisterInstanceEventNotificationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterInstanceEventNotificationAttributes', 'EC2', Promise.reject(result), true, mock)
  },
  deregisterTransitGatewayMulticastGroupMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupMembers', 'EC2', Promise.resolve(result), true, mock)
  },
  deregisterTransitGatewayMulticastGroupMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupMembers', 'EC2', Promise.resolve(result), false, mock)
  },
  deregisterTransitGatewayMulticastGroupMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupMembers', 'EC2', Promise.reject(result), true, mock)
  },
  deregisterTransitGatewayMulticastGroupSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupSources', 'EC2', Promise.resolve(result), true, mock)
  },
  deregisterTransitGatewayMulticastGroupSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupSources', 'EC2', Promise.resolve(result), false, mock)
  },
  deregisterTransitGatewayMulticastGroupSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'deregisterTransitGatewayMulticastGroupSources', 'EC2', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAccountAttributes', 'EC2', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAccountAttributes', 'EC2', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAccountAttributes', 'EC2', Promise.reject(result), true, mock)
  },
  describeAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddresses', 'EC2', Promise.resolve(result), true, mock)
  },
  describeAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddresses', 'EC2', Promise.resolve(result), false, mock)
  },
  describeAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddresses', 'EC2', Promise.reject(result), true, mock)
  },
  describeAddressesAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddressesAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeAddressesAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddressesAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeAddressesAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAddressesAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeAggregateIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAggregateIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  describeAggregateIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAggregateIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  describeAggregateIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAggregateIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  describeAvailabilityZones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAvailabilityZones', 'EC2', Promise.resolve(result), true, mock)
  },
  describeAvailabilityZonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAvailabilityZones', 'EC2', Promise.resolve(result), false, mock)
  },
  describeAvailabilityZonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeAvailabilityZones', 'EC2', Promise.reject(result), true, mock)
  },
  describeBundleTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeBundleTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeBundleTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeBundleTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeBundleTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeBundleTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeByoipCidrs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeByoipCidrs', 'EC2', Promise.resolve(result), true, mock)
  },
  describeByoipCidrsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeByoipCidrs', 'EC2', Promise.resolve(result), false, mock)
  },
  describeByoipCidrsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeByoipCidrs', 'EC2', Promise.reject(result), true, mock)
  },
  describeCapacityReservationFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservationFleets', 'EC2', Promise.resolve(result), true, mock)
  },
  describeCapacityReservationFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservationFleets', 'EC2', Promise.resolve(result), false, mock)
  },
  describeCapacityReservationFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservationFleets', 'EC2', Promise.reject(result), true, mock)
  },
  describeCapacityReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeCapacityReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeCapacityReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCapacityReservations', 'EC2', Promise.reject(result), true, mock)
  },
  describeCarrierGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCarrierGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeCarrierGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCarrierGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeCarrierGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCarrierGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeClassicLinkInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClassicLinkInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClassicLinkInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClassicLinkInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClassicLinkInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClassicLinkInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeClientVpnAuthorizationRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnAuthorizationRules', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClientVpnAuthorizationRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnAuthorizationRules', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClientVpnAuthorizationRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnAuthorizationRules', 'EC2', Promise.reject(result), true, mock)
  },
  describeClientVpnConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClientVpnConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClientVpnConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnConnections', 'EC2', Promise.reject(result), true, mock)
  },
  describeClientVpnEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnEndpoints', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClientVpnEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnEndpoints', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClientVpnEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnEndpoints', 'EC2', Promise.reject(result), true, mock)
  },
  describeClientVpnRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnRoutes', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClientVpnRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnRoutes', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClientVpnRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnRoutes', 'EC2', Promise.reject(result), true, mock)
  },
  describeClientVpnTargetNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnTargetNetworks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeClientVpnTargetNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnTargetNetworks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeClientVpnTargetNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeClientVpnTargetNetworks', 'EC2', Promise.reject(result), true, mock)
  },
  describeCoipPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCoipPools', 'EC2', Promise.resolve(result), true, mock)
  },
  describeCoipPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCoipPools', 'EC2', Promise.resolve(result), false, mock)
  },
  describeCoipPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCoipPools', 'EC2', Promise.reject(result), true, mock)
  },
  describeConversionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeConversionTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeConversionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeConversionTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeConversionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeConversionTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeCustomerGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCustomerGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeCustomerGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCustomerGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeCustomerGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeCustomerGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeDhcpOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeDhcpOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeDhcpOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeDhcpOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeDhcpOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeDhcpOptions', 'EC2', Promise.reject(result), true, mock)
  },
  describeEgressOnlyInternetGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeEgressOnlyInternetGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeEgressOnlyInternetGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeEgressOnlyInternetGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeEgressOnlyInternetGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeEgressOnlyInternetGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeElasticGpus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeElasticGpus', 'EC2', Promise.resolve(result), true, mock)
  },
  describeElasticGpusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeElasticGpus', 'EC2', Promise.resolve(result), false, mock)
  },
  describeElasticGpusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeElasticGpus', 'EC2', Promise.reject(result), true, mock)
  },
  describeExportImageTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportImageTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeExportImageTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportImageTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeExportImageTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportImageTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeExportTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeFastSnapshotRestores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFastSnapshotRestores', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFastSnapshotRestoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFastSnapshotRestores', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFastSnapshotRestoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFastSnapshotRestores', 'EC2', Promise.reject(result), true, mock)
  },
  describeFleetHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetHistory', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFleetHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetHistory', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFleetHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetHistory', 'EC2', Promise.reject(result), true, mock)
  },
  describeFleetInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFleetInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFleetInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleetInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleets', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleets', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFleets', 'EC2', Promise.reject(result), true, mock)
  },
  describeFlowLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFlowLogs', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFlowLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFlowLogs', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFlowLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFlowLogs', 'EC2', Promise.reject(result), true, mock)
  },
  describeFpgaImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFpgaImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFpgaImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeFpgaImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImages', 'EC2', Promise.resolve(result), true, mock)
  },
  describeFpgaImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImages', 'EC2', Promise.resolve(result), false, mock)
  },
  describeFpgaImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeFpgaImages', 'EC2', Promise.reject(result), true, mock)
  },
  describeHostReservationOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservationOfferings', 'EC2', Promise.resolve(result), true, mock)
  },
  describeHostReservationOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservationOfferings', 'EC2', Promise.resolve(result), false, mock)
  },
  describeHostReservationOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservationOfferings', 'EC2', Promise.reject(result), true, mock)
  },
  describeHostReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeHostReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeHostReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHostReservations', 'EC2', Promise.reject(result), true, mock)
  },
  describeHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHosts', 'EC2', Promise.resolve(result), true, mock)
  },
  describeHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHosts', 'EC2', Promise.resolve(result), false, mock)
  },
  describeHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeHosts', 'EC2', Promise.reject(result), true, mock)
  },
  describeIamInstanceProfileAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIamInstanceProfileAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeIamInstanceProfileAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIamInstanceProfileAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeIamInstanceProfileAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIamInstanceProfileAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  describeIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  describeIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  describeIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  describeIdentityIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdentityIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  describeIdentityIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdentityIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  describeIdentityIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIdentityIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  describeImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImages', 'EC2', Promise.resolve(result), true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImages', 'EC2', Promise.resolve(result), false, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImages', 'EC2', Promise.reject(result), true, mock)
  },
  describeImportImageTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportImageTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeImportImageTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportImageTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeImportImageTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportImageTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeImportSnapshotTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportSnapshotTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeImportSnapshotTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportSnapshotTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeImportSnapshotTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeImportSnapshotTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceCreditSpecifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceCreditSpecifications', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceCreditSpecificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceCreditSpecifications', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceCreditSpecificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceCreditSpecifications', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceEventNotificationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceEventNotificationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceEventNotificationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventNotificationAttributes', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceEventWindows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventWindows', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceEventWindowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventWindows', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceEventWindowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceEventWindows', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceStatus', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceStatus', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceStatus', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceTypeOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypeOfferings', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceTypeOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypeOfferings', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceTypeOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypeOfferings', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypes', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypes', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstanceTypes', 'EC2', Promise.reject(result), true, mock)
  },
  describeInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeInternetGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInternetGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeInternetGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInternetGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeInternetGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeInternetGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeIpv6Pools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIpv6Pools', 'EC2', Promise.resolve(result), true, mock)
  },
  describeIpv6PoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIpv6Pools', 'EC2', Promise.resolve(result), false, mock)
  },
  describeIpv6PoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeIpv6Pools', 'EC2', Promise.reject(result), true, mock)
  },
  describeKeyPairs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeKeyPairs', 'EC2', Promise.resolve(result), true, mock)
  },
  describeKeyPairsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeKeyPairs', 'EC2', Promise.resolve(result), false, mock)
  },
  describeKeyPairsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeKeyPairs', 'EC2', Promise.reject(result), true, mock)
  },
  describeLaunchTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplateVersions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLaunchTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplateVersions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLaunchTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplateVersions', 'EC2', Promise.reject(result), true, mock)
  },
  describeLaunchTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplates', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLaunchTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplates', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLaunchTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLaunchTemplates', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGatewayRouteTableVpcAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVpcAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewayRouteTableVpcAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVpcAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewayRouteTableVpcAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTableVpcAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGatewayRouteTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTables', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewayRouteTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTables', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewayRouteTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayRouteTables', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGatewayVirtualInterfaceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaceGroups', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewayVirtualInterfaceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaceGroups', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewayVirtualInterfaceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaceGroups', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGatewayVirtualInterfaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaces', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewayVirtualInterfacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaces', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewayVirtualInterfacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGatewayVirtualInterfaces', 'EC2', Promise.reject(result), true, mock)
  },
  describeLocalGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeLocalGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeLocalGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeLocalGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeManagedPrefixLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeManagedPrefixLists', 'EC2', Promise.resolve(result), true, mock)
  },
  describeManagedPrefixListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeManagedPrefixLists', 'EC2', Promise.resolve(result), false, mock)
  },
  describeManagedPrefixListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeManagedPrefixLists', 'EC2', Promise.reject(result), true, mock)
  },
  describeMovingAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeMovingAddresses', 'EC2', Promise.resolve(result), true, mock)
  },
  describeMovingAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeMovingAddresses', 'EC2', Promise.resolve(result), false, mock)
  },
  describeMovingAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeMovingAddresses', 'EC2', Promise.reject(result), true, mock)
  },
  describeNatGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNatGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNatGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNatGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNatGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNatGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkAcls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkAcls', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkAclsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkAcls', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkAclsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkAcls', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkInsightsAnalyses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsAnalyses', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkInsightsAnalysesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsAnalyses', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkInsightsAnalysesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsAnalyses', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkInsightsPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsPaths', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkInsightsPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsPaths', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkInsightsPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInsightsPaths', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkInterfaceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkInterfaceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkInterfaceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkInterfacePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfacePermissions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkInterfacePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfacePermissions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkInterfacePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfacePermissions', 'EC2', Promise.reject(result), true, mock)
  },
  describeNetworkInterfaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaces', 'EC2', Promise.resolve(result), true, mock)
  },
  describeNetworkInterfacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaces', 'EC2', Promise.resolve(result), false, mock)
  },
  describeNetworkInterfacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeNetworkInterfaces', 'EC2', Promise.reject(result), true, mock)
  },
  describePlacementGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePlacementGroups', 'EC2', Promise.resolve(result), true, mock)
  },
  describePlacementGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePlacementGroups', 'EC2', Promise.resolve(result), false, mock)
  },
  describePlacementGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePlacementGroups', 'EC2', Promise.reject(result), true, mock)
  },
  describePrefixLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrefixLists', 'EC2', Promise.resolve(result), true, mock)
  },
  describePrefixListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrefixLists', 'EC2', Promise.resolve(result), false, mock)
  },
  describePrefixListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrefixLists', 'EC2', Promise.reject(result), true, mock)
  },
  describePrincipalIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrincipalIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  describePrincipalIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrincipalIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  describePrincipalIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePrincipalIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  describePublicIpv4Pools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePublicIpv4Pools', 'EC2', Promise.resolve(result), true, mock)
  },
  describePublicIpv4PoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePublicIpv4Pools', 'EC2', Promise.resolve(result), false, mock)
  },
  describePublicIpv4PoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describePublicIpv4Pools', 'EC2', Promise.reject(result), true, mock)
  },
  describeRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRegions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRegions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRegions', 'EC2', Promise.reject(result), true, mock)
  },
  describeReplaceRootVolumeTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReplaceRootVolumeTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeReplaceRootVolumeTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReplaceRootVolumeTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeReplaceRootVolumeTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReplaceRootVolumeTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeReservedInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeReservedInstancesListings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesListings', 'EC2', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesListingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesListings', 'EC2', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesListingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesListings', 'EC2', Promise.reject(result), true, mock)
  },
  describeReservedInstancesModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesModifications', 'EC2', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesModifications', 'EC2', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesModifications', 'EC2', Promise.reject(result), true, mock)
  },
  describeReservedInstancesOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesOfferings', 'EC2', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesOfferings', 'EC2', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeReservedInstancesOfferings', 'EC2', Promise.reject(result), true, mock)
  },
  describeRouteTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRouteTables', 'EC2', Promise.resolve(result), true, mock)
  },
  describeRouteTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRouteTables', 'EC2', Promise.resolve(result), false, mock)
  },
  describeRouteTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeRouteTables', 'EC2', Promise.reject(result), true, mock)
  },
  describeScheduledInstanceAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstanceAvailability', 'EC2', Promise.resolve(result), true, mock)
  },
  describeScheduledInstanceAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstanceAvailability', 'EC2', Promise.resolve(result), false, mock)
  },
  describeScheduledInstanceAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstanceAvailability', 'EC2', Promise.reject(result), true, mock)
  },
  describeScheduledInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeScheduledInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeScheduledInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeScheduledInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeSecurityGroupReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupReferences', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSecurityGroupReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupReferences', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSecurityGroupReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupReferences', 'EC2', Promise.reject(result), true, mock)
  },
  describeSecurityGroupRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupRules', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSecurityGroupRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupRules', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSecurityGroupRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroupRules', 'EC2', Promise.reject(result), true, mock)
  },
  describeSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroups', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroups', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSecurityGroups', 'EC2', Promise.reject(result), true, mock)
  },
  describeSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshotAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshotAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshotAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshots', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshots', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSnapshots', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotDatafeedSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotDatafeedSubscription', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotDatafeedSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotDatafeedSubscription', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotDatafeedSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotDatafeedSubscription', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotFleetInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotFleetInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotFleetInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetInstances', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotFleetRequestHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequestHistory', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotFleetRequestHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequestHistory', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotFleetRequestHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequestHistory', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotFleetRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequests', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotFleetRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequests', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotFleetRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotFleetRequests', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotInstanceRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotInstanceRequests', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotInstanceRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotInstanceRequests', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotInstanceRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotInstanceRequests', 'EC2', Promise.reject(result), true, mock)
  },
  describeSpotPriceHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotPriceHistory', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSpotPriceHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotPriceHistory', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSpotPriceHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSpotPriceHistory', 'EC2', Promise.reject(result), true, mock)
  },
  describeStaleSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStaleSecurityGroups', 'EC2', Promise.resolve(result), true, mock)
  },
  describeStaleSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStaleSecurityGroups', 'EC2', Promise.resolve(result), false, mock)
  },
  describeStaleSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStaleSecurityGroups', 'EC2', Promise.reject(result), true, mock)
  },
  describeStoreImageTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStoreImageTasks', 'EC2', Promise.resolve(result), true, mock)
  },
  describeStoreImageTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStoreImageTasks', 'EC2', Promise.resolve(result), false, mock)
  },
  describeStoreImageTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeStoreImageTasks', 'EC2', Promise.reject(result), true, mock)
  },
  describeSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSubnets', 'EC2', Promise.resolve(result), true, mock)
  },
  describeSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSubnets', 'EC2', Promise.resolve(result), false, mock)
  },
  describeSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeSubnets', 'EC2', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTags', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTags', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTags', 'EC2', Promise.reject(result), true, mock)
  },
  describeTrafficMirrorFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorFilters', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTrafficMirrorFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorFilters', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTrafficMirrorFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorFilters', 'EC2', Promise.reject(result), true, mock)
  },
  describeTrafficMirrorSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorSessions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTrafficMirrorSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorSessions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTrafficMirrorSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorSessions', 'EC2', Promise.reject(result), true, mock)
  },
  describeTrafficMirrorTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorTargets', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTrafficMirrorTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorTargets', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTrafficMirrorTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrafficMirrorTargets', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayAttachments', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayAttachments', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayAttachments', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayConnectPeers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnectPeers', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayConnectPeersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnectPeers', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayConnectPeersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnectPeers', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnects', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnects', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayConnects', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayMulticastDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayMulticastDomains', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayMulticastDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayMulticastDomains', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayMulticastDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayMulticastDomains', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayPeeringAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayPeeringAttachments', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayPeeringAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayPeeringAttachments', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayPeeringAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayPeeringAttachments', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayRouteTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayRouteTables', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayRouteTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayRouteTables', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayRouteTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayRouteTables', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGatewayVpcAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayVpcAttachments', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewayVpcAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayVpcAttachments', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewayVpcAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGatewayVpcAttachments', 'EC2', Promise.reject(result), true, mock)
  },
  describeTransitGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTransitGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTransitGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTransitGateways', 'EC2', Promise.reject(result), true, mock)
  },
  describeTrunkInterfaceAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrunkInterfaceAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeTrunkInterfaceAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrunkInterfaceAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeTrunkInterfaceAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeTrunkInterfaceAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  describeVolumeAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVolumeAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVolumeAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeVolumeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeStatus', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVolumeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeStatus', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVolumeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumeStatus', 'EC2', Promise.reject(result), true, mock)
  },
  describeVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumes', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumes', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumes', 'EC2', Promise.reject(result), true, mock)
  },
  describeVolumesModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumesModifications', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVolumesModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumesModifications', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVolumesModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVolumesModifications', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcClassicLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLink', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcClassicLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLink', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcClassicLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLink', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcClassicLinkDnsSupport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcClassicLinkDnsSupportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcClassicLinkDnsSupportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcClassicLinkDnsSupport', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpointConnectionNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnectionNotifications', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointConnectionNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnectionNotifications', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointConnectionNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnectionNotifications', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpointConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointConnections', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpointServiceConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServiceConfigurations', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointServiceConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServiceConfigurations', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointServiceConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServiceConfigurations', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpointServicePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServicePermissions', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointServicePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServicePermissions', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointServicePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServicePermissions', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpointServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServices', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServices', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpointServices', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpoints', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpoints', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcEndpoints', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcPeeringConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcPeeringConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcPeeringConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcPeeringConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcPeeringConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcPeeringConnections', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpcs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcs', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpcsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcs', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpcsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpcs', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpnConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpnConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpnConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnConnections', 'EC2', Promise.reject(result), true, mock)
  },
  describeVpnGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnGateways', 'EC2', Promise.resolve(result), true, mock)
  },
  describeVpnGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnGateways', 'EC2', Promise.resolve(result), false, mock)
  },
  describeVpnGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'describeVpnGateways', 'EC2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'destroy', 'EC2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'destroy', 'EC2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'destroy', 'EC2', Promise.reject(result), true, mock)
  },
  detachClassicLinkVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachClassicLinkVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  detachClassicLinkVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachClassicLinkVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  detachClassicLinkVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachClassicLinkVpc', 'EC2', Promise.reject(result), true, mock)
  },
  detachInternetGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachInternetGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  detachInternetGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachInternetGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  detachInternetGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachInternetGateway', 'EC2', Promise.reject(result), true, mock)
  },
  detachNetworkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachNetworkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  detachNetworkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachNetworkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  detachNetworkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachNetworkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  detachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  detachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  detachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVolume', 'EC2', Promise.reject(result), true, mock)
  },
  detachVpnGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVpnGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  detachVpnGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVpnGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  detachVpnGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'detachVpnGateway', 'EC2', Promise.reject(result), true, mock)
  },
  disableEbsEncryptionByDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableEbsEncryptionByDefault', 'EC2', Promise.resolve(result), true, mock)
  },
  disableEbsEncryptionByDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableEbsEncryptionByDefault', 'EC2', Promise.resolve(result), false, mock)
  },
  disableEbsEncryptionByDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableEbsEncryptionByDefault', 'EC2', Promise.reject(result), true, mock)
  },
  disableFastSnapshotRestores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableFastSnapshotRestores', 'EC2', Promise.resolve(result), true, mock)
  },
  disableFastSnapshotRestoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableFastSnapshotRestores', 'EC2', Promise.resolve(result), false, mock)
  },
  disableFastSnapshotRestoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableFastSnapshotRestores', 'EC2', Promise.reject(result), true, mock)
  },
  disableImageDeprecation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableImageDeprecation', 'EC2', Promise.resolve(result), true, mock)
  },
  disableImageDeprecationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableImageDeprecation', 'EC2', Promise.resolve(result), false, mock)
  },
  disableImageDeprecationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableImageDeprecation', 'EC2', Promise.reject(result), true, mock)
  },
  disableSerialConsoleAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableSerialConsoleAccess', 'EC2', Promise.resolve(result), true, mock)
  },
  disableSerialConsoleAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableSerialConsoleAccess', 'EC2', Promise.resolve(result), false, mock)
  },
  disableSerialConsoleAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableSerialConsoleAccess', 'EC2', Promise.reject(result), true, mock)
  },
  disableTransitGatewayRouteTablePropagation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableTransitGatewayRouteTablePropagation', 'EC2', Promise.resolve(result), true, mock)
  },
  disableTransitGatewayRouteTablePropagationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableTransitGatewayRouteTablePropagation', 'EC2', Promise.resolve(result), false, mock)
  },
  disableTransitGatewayRouteTablePropagationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableTransitGatewayRouteTablePropagation', 'EC2', Promise.reject(result), true, mock)
  },
  disableVgwRoutePropagation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVgwRoutePropagation', 'EC2', Promise.resolve(result), true, mock)
  },
  disableVgwRoutePropagationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVgwRoutePropagation', 'EC2', Promise.resolve(result), false, mock)
  },
  disableVgwRoutePropagationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVgwRoutePropagation', 'EC2', Promise.reject(result), true, mock)
  },
  disableVpcClassicLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLink', 'EC2', Promise.resolve(result), true, mock)
  },
  disableVpcClassicLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLink', 'EC2', Promise.resolve(result), false, mock)
  },
  disableVpcClassicLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLink', 'EC2', Promise.reject(result), true, mock)
  },
  disableVpcClassicLinkDnsSupport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), true, mock)
  },
  disableVpcClassicLinkDnsSupportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), false, mock)
  },
  disableVpcClassicLinkDnsSupportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disableVpcClassicLinkDnsSupport', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateAddress', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateAddress', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateAddress', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateClientVpnTargetNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateClientVpnTargetNetwork', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateClientVpnTargetNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateClientVpnTargetNetwork', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateClientVpnTargetNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateClientVpnTargetNetwork', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateEnclaveCertificateIamRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateEnclaveCertificateIamRole', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateEnclaveCertificateIamRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateEnclaveCertificateIamRole', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateEnclaveCertificateIamRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateEnclaveCertificateIamRole', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateIamInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateIamInstanceProfile', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateIamInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateIamInstanceProfile', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateIamInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateIamInstanceProfile', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateInstanceEventWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateInstanceEventWindow', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateInstanceEventWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateInstanceEventWindow', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateInstanceEventWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateInstanceEventWindow', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateSubnetCidrBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateSubnetCidrBlock', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateSubnetCidrBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateSubnetCidrBlock', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateSubnetCidrBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateSubnetCidrBlock', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateTransitGatewayMulticastDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateTransitGatewayMulticastDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayMulticastDomain', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateTransitGatewayMulticastDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayMulticastDomain', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateTransitGatewayRouteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayRouteTable', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateTransitGatewayRouteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayRouteTable', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateTransitGatewayRouteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTransitGatewayRouteTable', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateTrunkInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTrunkInterface', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateTrunkInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTrunkInterface', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateTrunkInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateTrunkInterface', 'EC2', Promise.reject(result), true, mock)
  },
  disassociateVpcCidrBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateVpcCidrBlock', 'EC2', Promise.resolve(result), true, mock)
  },
  disassociateVpcCidrBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateVpcCidrBlock', 'EC2', Promise.resolve(result), false, mock)
  },
  disassociateVpcCidrBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'disassociateVpcCidrBlock', 'EC2', Promise.reject(result), true, mock)
  },
  enableEbsEncryptionByDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableEbsEncryptionByDefault', 'EC2', Promise.resolve(result), true, mock)
  },
  enableEbsEncryptionByDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableEbsEncryptionByDefault', 'EC2', Promise.resolve(result), false, mock)
  },
  enableEbsEncryptionByDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableEbsEncryptionByDefault', 'EC2', Promise.reject(result), true, mock)
  },
  enableFastSnapshotRestores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableFastSnapshotRestores', 'EC2', Promise.resolve(result), true, mock)
  },
  enableFastSnapshotRestoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableFastSnapshotRestores', 'EC2', Promise.resolve(result), false, mock)
  },
  enableFastSnapshotRestoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableFastSnapshotRestores', 'EC2', Promise.reject(result), true, mock)
  },
  enableImageDeprecation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableImageDeprecation', 'EC2', Promise.resolve(result), true, mock)
  },
  enableImageDeprecationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableImageDeprecation', 'EC2', Promise.resolve(result), false, mock)
  },
  enableImageDeprecationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableImageDeprecation', 'EC2', Promise.reject(result), true, mock)
  },
  enableSerialConsoleAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableSerialConsoleAccess', 'EC2', Promise.resolve(result), true, mock)
  },
  enableSerialConsoleAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableSerialConsoleAccess', 'EC2', Promise.resolve(result), false, mock)
  },
  enableSerialConsoleAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableSerialConsoleAccess', 'EC2', Promise.reject(result), true, mock)
  },
  enableTransitGatewayRouteTablePropagation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableTransitGatewayRouteTablePropagation', 'EC2', Promise.resolve(result), true, mock)
  },
  enableTransitGatewayRouteTablePropagationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableTransitGatewayRouteTablePropagation', 'EC2', Promise.resolve(result), false, mock)
  },
  enableTransitGatewayRouteTablePropagationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableTransitGatewayRouteTablePropagation', 'EC2', Promise.reject(result), true, mock)
  },
  enableVgwRoutePropagation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVgwRoutePropagation', 'EC2', Promise.resolve(result), true, mock)
  },
  enableVgwRoutePropagationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVgwRoutePropagation', 'EC2', Promise.resolve(result), false, mock)
  },
  enableVgwRoutePropagationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVgwRoutePropagation', 'EC2', Promise.reject(result), true, mock)
  },
  enableVolumeIO: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVolumeIO', 'EC2', Promise.resolve(result), true, mock)
  },
  enableVolumeIOAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVolumeIO', 'EC2', Promise.resolve(result), false, mock)
  },
  enableVolumeIOThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVolumeIO', 'EC2', Promise.reject(result), true, mock)
  },
  enableVpcClassicLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLink', 'EC2', Promise.resolve(result), true, mock)
  },
  enableVpcClassicLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLink', 'EC2', Promise.resolve(result), false, mock)
  },
  enableVpcClassicLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLink', 'EC2', Promise.reject(result), true, mock)
  },
  enableVpcClassicLinkDnsSupport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), true, mock)
  },
  enableVpcClassicLinkDnsSupportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLinkDnsSupport', 'EC2', Promise.resolve(result), false, mock)
  },
  enableVpcClassicLinkDnsSupportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'enableVpcClassicLinkDnsSupport', 'EC2', Promise.reject(result), true, mock)
  },
  exportClientVpnClientCertificateRevocationList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientCertificateRevocationList', 'EC2', Promise.resolve(result), true, mock)
  },
  exportClientVpnClientCertificateRevocationListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientCertificateRevocationList', 'EC2', Promise.resolve(result), false, mock)
  },
  exportClientVpnClientCertificateRevocationListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientCertificateRevocationList', 'EC2', Promise.reject(result), true, mock)
  },
  exportClientVpnClientConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientConfiguration', 'EC2', Promise.resolve(result), true, mock)
  },
  exportClientVpnClientConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientConfiguration', 'EC2', Promise.resolve(result), false, mock)
  },
  exportClientVpnClientConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportClientVpnClientConfiguration', 'EC2', Promise.reject(result), true, mock)
  },
  exportImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportImage', 'EC2', Promise.resolve(result), true, mock)
  },
  exportImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportImage', 'EC2', Promise.resolve(result), false, mock)
  },
  exportImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportImage', 'EC2', Promise.reject(result), true, mock)
  },
  exportTransitGatewayRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportTransitGatewayRoutes', 'EC2', Promise.resolve(result), true, mock)
  },
  exportTransitGatewayRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportTransitGatewayRoutes', 'EC2', Promise.resolve(result), false, mock)
  },
  exportTransitGatewayRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'exportTransitGatewayRoutes', 'EC2', Promise.reject(result), true, mock)
  },
  getAssociatedEnclaveCertificateIamRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedEnclaveCertificateIamRoles', 'EC2', Promise.resolve(result), true, mock)
  },
  getAssociatedEnclaveCertificateIamRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedEnclaveCertificateIamRoles', 'EC2', Promise.resolve(result), false, mock)
  },
  getAssociatedEnclaveCertificateIamRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedEnclaveCertificateIamRoles', 'EC2', Promise.reject(result), true, mock)
  },
  getAssociatedIpv6PoolCidrs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedIpv6PoolCidrs', 'EC2', Promise.resolve(result), true, mock)
  },
  getAssociatedIpv6PoolCidrsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedIpv6PoolCidrs', 'EC2', Promise.resolve(result), false, mock)
  },
  getAssociatedIpv6PoolCidrsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getAssociatedIpv6PoolCidrs', 'EC2', Promise.reject(result), true, mock)
  },
  getCapacityReservationUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCapacityReservationUsage', 'EC2', Promise.resolve(result), true, mock)
  },
  getCapacityReservationUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCapacityReservationUsage', 'EC2', Promise.resolve(result), false, mock)
  },
  getCapacityReservationUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCapacityReservationUsage', 'EC2', Promise.reject(result), true, mock)
  },
  getCoipPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCoipPoolUsage', 'EC2', Promise.resolve(result), true, mock)
  },
  getCoipPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCoipPoolUsage', 'EC2', Promise.resolve(result), false, mock)
  },
  getCoipPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getCoipPoolUsage', 'EC2', Promise.reject(result), true, mock)
  },
  getConsoleOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleOutput', 'EC2', Promise.resolve(result), true, mock)
  },
  getConsoleOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleOutput', 'EC2', Promise.resolve(result), false, mock)
  },
  getConsoleOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleOutput', 'EC2', Promise.reject(result), true, mock)
  },
  getConsoleScreenshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleScreenshot', 'EC2', Promise.resolve(result), true, mock)
  },
  getConsoleScreenshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleScreenshot', 'EC2', Promise.resolve(result), false, mock)
  },
  getConsoleScreenshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getConsoleScreenshot', 'EC2', Promise.reject(result), true, mock)
  },
  getDefaultCreditSpecification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getDefaultCreditSpecification', 'EC2', Promise.resolve(result), true, mock)
  },
  getDefaultCreditSpecificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getDefaultCreditSpecification', 'EC2', Promise.resolve(result), false, mock)
  },
  getDefaultCreditSpecificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getDefaultCreditSpecification', 'EC2', Promise.reject(result), true, mock)
  },
  getEbsDefaultKmsKeyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), true, mock)
  },
  getEbsDefaultKmsKeyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), false, mock)
  },
  getEbsDefaultKmsKeyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsDefaultKmsKeyId', 'EC2', Promise.reject(result), true, mock)
  },
  getEbsEncryptionByDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsEncryptionByDefault', 'EC2', Promise.resolve(result), true, mock)
  },
  getEbsEncryptionByDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsEncryptionByDefault', 'EC2', Promise.resolve(result), false, mock)
  },
  getEbsEncryptionByDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getEbsEncryptionByDefault', 'EC2', Promise.reject(result), true, mock)
  },
  getFlowLogsIntegrationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getFlowLogsIntegrationTemplate', 'EC2', Promise.resolve(result), true, mock)
  },
  getFlowLogsIntegrationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getFlowLogsIntegrationTemplate', 'EC2', Promise.resolve(result), false, mock)
  },
  getFlowLogsIntegrationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getFlowLogsIntegrationTemplate', 'EC2', Promise.reject(result), true, mock)
  },
  getGroupsForCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getGroupsForCapacityReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  getGroupsForCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getGroupsForCapacityReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  getGroupsForCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getGroupsForCapacityReservation', 'EC2', Promise.reject(result), true, mock)
  },
  getHostReservationPurchasePreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getHostReservationPurchasePreview', 'EC2', Promise.resolve(result), true, mock)
  },
  getHostReservationPurchasePreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getHostReservationPurchasePreview', 'EC2', Promise.resolve(result), false, mock)
  },
  getHostReservationPurchasePreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getHostReservationPurchasePreview', 'EC2', Promise.reject(result), true, mock)
  },
  getInstanceTypesFromInstanceRequirements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getInstanceTypesFromInstanceRequirements', 'EC2', Promise.resolve(result), true, mock)
  },
  getInstanceTypesFromInstanceRequirementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getInstanceTypesFromInstanceRequirements', 'EC2', Promise.resolve(result), false, mock)
  },
  getInstanceTypesFromInstanceRequirementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getInstanceTypesFromInstanceRequirements', 'EC2', Promise.reject(result), true, mock)
  },
  getLaunchTemplateData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getLaunchTemplateData', 'EC2', Promise.resolve(result), true, mock)
  },
  getLaunchTemplateDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getLaunchTemplateData', 'EC2', Promise.resolve(result), false, mock)
  },
  getLaunchTemplateDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getLaunchTemplateData', 'EC2', Promise.reject(result), true, mock)
  },
  getManagedPrefixListAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  getManagedPrefixListAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  getManagedPrefixListAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  getManagedPrefixListEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListEntries', 'EC2', Promise.resolve(result), true, mock)
  },
  getManagedPrefixListEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListEntries', 'EC2', Promise.resolve(result), false, mock)
  },
  getManagedPrefixListEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getManagedPrefixListEntries', 'EC2', Promise.reject(result), true, mock)
  },
  getPasswordData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getPasswordData', 'EC2', Promise.resolve(result), true, mock)
  },
  getPasswordDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getPasswordData', 'EC2', Promise.resolve(result), false, mock)
  },
  getPasswordDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getPasswordData', 'EC2', Promise.reject(result), true, mock)
  },
  getReservedInstancesExchangeQuote: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getReservedInstancesExchangeQuote', 'EC2', Promise.resolve(result), true, mock)
  },
  getReservedInstancesExchangeQuoteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getReservedInstancesExchangeQuote', 'EC2', Promise.resolve(result), false, mock)
  },
  getReservedInstancesExchangeQuoteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getReservedInstancesExchangeQuote', 'EC2', Promise.reject(result), true, mock)
  },
  getSerialConsoleAccessStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSerialConsoleAccessStatus', 'EC2', Promise.resolve(result), true, mock)
  },
  getSerialConsoleAccessStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSerialConsoleAccessStatus', 'EC2', Promise.resolve(result), false, mock)
  },
  getSerialConsoleAccessStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSerialConsoleAccessStatus', 'EC2', Promise.reject(result), true, mock)
  },
  getSpotPlacementScores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSpotPlacementScores', 'EC2', Promise.resolve(result), true, mock)
  },
  getSpotPlacementScoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSpotPlacementScores', 'EC2', Promise.resolve(result), false, mock)
  },
  getSpotPlacementScoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSpotPlacementScores', 'EC2', Promise.reject(result), true, mock)
  },
  getSubnetCidrReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSubnetCidrReservations', 'EC2', Promise.resolve(result), true, mock)
  },
  getSubnetCidrReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSubnetCidrReservations', 'EC2', Promise.resolve(result), false, mock)
  },
  getSubnetCidrReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getSubnetCidrReservations', 'EC2', Promise.reject(result), true, mock)
  },
  getTransitGatewayAttachmentPropagations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayAttachmentPropagations', 'EC2', Promise.resolve(result), true, mock)
  },
  getTransitGatewayAttachmentPropagationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayAttachmentPropagations', 'EC2', Promise.resolve(result), false, mock)
  },
  getTransitGatewayAttachmentPropagationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayAttachmentPropagations', 'EC2', Promise.reject(result), true, mock)
  },
  getTransitGatewayMulticastDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  getTransitGatewayMulticastDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  getTransitGatewayMulticastDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayMulticastDomainAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  getTransitGatewayPrefixListReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayPrefixListReferences', 'EC2', Promise.resolve(result), true, mock)
  },
  getTransitGatewayPrefixListReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayPrefixListReferences', 'EC2', Promise.resolve(result), false, mock)
  },
  getTransitGatewayPrefixListReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayPrefixListReferences', 'EC2', Promise.reject(result), true, mock)
  },
  getTransitGatewayRouteTableAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTableAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  getTransitGatewayRouteTableAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTableAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  getTransitGatewayRouteTableAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTableAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  getTransitGatewayRouteTablePropagations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTablePropagations', 'EC2', Promise.resolve(result), true, mock)
  },
  getTransitGatewayRouteTablePropagationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTablePropagations', 'EC2', Promise.resolve(result), false, mock)
  },
  getTransitGatewayRouteTablePropagationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getTransitGatewayRouteTablePropagations', 'EC2', Promise.reject(result), true, mock)
  },
  getVpnConnectionDeviceSampleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceSampleConfiguration', 'EC2', Promise.resolve(result), true, mock)
  },
  getVpnConnectionDeviceSampleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceSampleConfiguration', 'EC2', Promise.resolve(result), false, mock)
  },
  getVpnConnectionDeviceSampleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceSampleConfiguration', 'EC2', Promise.reject(result), true, mock)
  },
  getVpnConnectionDeviceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceTypes', 'EC2', Promise.resolve(result), true, mock)
  },
  getVpnConnectionDeviceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceTypes', 'EC2', Promise.resolve(result), false, mock)
  },
  getVpnConnectionDeviceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'getVpnConnectionDeviceTypes', 'EC2', Promise.reject(result), true, mock)
  },
  importClientVpnClientCertificateRevocationList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importClientVpnClientCertificateRevocationList', 'EC2', Promise.resolve(result), true, mock)
  },
  importClientVpnClientCertificateRevocationListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importClientVpnClientCertificateRevocationList', 'EC2', Promise.resolve(result), false, mock)
  },
  importClientVpnClientCertificateRevocationListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importClientVpnClientCertificateRevocationList', 'EC2', Promise.reject(result), true, mock)
  },
  importImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importImage', 'EC2', Promise.resolve(result), true, mock)
  },
  importImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importImage', 'EC2', Promise.resolve(result), false, mock)
  },
  importImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importImage', 'EC2', Promise.reject(result), true, mock)
  },
  importInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importInstance', 'EC2', Promise.resolve(result), true, mock)
  },
  importInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importInstance', 'EC2', Promise.resolve(result), false, mock)
  },
  importInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importInstance', 'EC2', Promise.reject(result), true, mock)
  },
  importKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importKeyPair', 'EC2', Promise.resolve(result), true, mock)
  },
  importKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importKeyPair', 'EC2', Promise.resolve(result), false, mock)
  },
  importKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importKeyPair', 'EC2', Promise.reject(result), true, mock)
  },
  importSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importSnapshot', 'EC2', Promise.resolve(result), true, mock)
  },
  importSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importSnapshot', 'EC2', Promise.resolve(result), false, mock)
  },
  importSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importSnapshot', 'EC2', Promise.reject(result), true, mock)
  },
  importVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  importVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  importVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'importVolume', 'EC2', Promise.reject(result), true, mock)
  },
  modifyAddressAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAddressAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyAddressAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAddressAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyAddressAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAddressAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyAvailabilityZoneGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAvailabilityZoneGroup', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyAvailabilityZoneGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAvailabilityZoneGroup', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyAvailabilityZoneGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyAvailabilityZoneGroup', 'EC2', Promise.reject(result), true, mock)
  },
  modifyCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservation', 'EC2', Promise.reject(result), true, mock)
  },
  modifyCapacityReservationFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservationFleet', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyCapacityReservationFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservationFleet', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyCapacityReservationFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyCapacityReservationFleet', 'EC2', Promise.reject(result), true, mock)
  },
  modifyClientVpnEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyClientVpnEndpoint', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyClientVpnEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyClientVpnEndpoint', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyClientVpnEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyClientVpnEndpoint', 'EC2', Promise.reject(result), true, mock)
  },
  modifyDefaultCreditSpecification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyDefaultCreditSpecification', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyDefaultCreditSpecificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyDefaultCreditSpecification', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyDefaultCreditSpecificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyDefaultCreditSpecification', 'EC2', Promise.reject(result), true, mock)
  },
  modifyEbsDefaultKmsKeyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyEbsDefaultKmsKeyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyEbsDefaultKmsKeyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyEbsDefaultKmsKeyId', 'EC2', Promise.reject(result), true, mock)
  },
  modifyFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFleet', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFleet', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFleet', 'EC2', Promise.reject(result), true, mock)
  },
  modifyFpgaImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFpgaImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyFpgaImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFpgaImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyFpgaImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyFpgaImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyHosts', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyHosts', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyHosts', 'EC2', Promise.reject(result), true, mock)
  },
  modifyIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  modifyIdentityIdFormat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdentityIdFormat', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyIdentityIdFormatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdentityIdFormat', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyIdentityIdFormatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyIdentityIdFormat', 'EC2', Promise.reject(result), true, mock)
  },
  modifyImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceCapacityReservationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCapacityReservationAttributes', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceCapacityReservationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCapacityReservationAttributes', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceCapacityReservationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCapacityReservationAttributes', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceCreditSpecification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCreditSpecification', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceCreditSpecificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCreditSpecification', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceCreditSpecificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceCreditSpecification', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceEventStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventStartTime', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceEventStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventStartTime', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceEventStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventStartTime', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceEventWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventWindow', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceEventWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventWindow', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceEventWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceEventWindow', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstanceMetadataOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceMetadataOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstanceMetadataOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceMetadataOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstanceMetadataOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstanceMetadataOptions', 'EC2', Promise.reject(result), true, mock)
  },
  modifyInstancePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstancePlacement', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyInstancePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstancePlacement', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyInstancePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyInstancePlacement', 'EC2', Promise.reject(result), true, mock)
  },
  modifyLaunchTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyLaunchTemplate', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyLaunchTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyLaunchTemplate', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyLaunchTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyLaunchTemplate', 'EC2', Promise.reject(result), true, mock)
  },
  modifyManagedPrefixList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyManagedPrefixList', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyManagedPrefixListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyManagedPrefixList', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyManagedPrefixListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyManagedPrefixList', 'EC2', Promise.reject(result), true, mock)
  },
  modifyNetworkInterfaceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyNetworkInterfaceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyNetworkInterfaceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyNetworkInterfaceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyReservedInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyReservedInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyReservedInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyReservedInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyReservedInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyReservedInstances', 'EC2', Promise.reject(result), true, mock)
  },
  modifySecurityGroupRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySecurityGroupRules', 'EC2', Promise.resolve(result), true, mock)
  },
  modifySecurityGroupRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySecurityGroupRules', 'EC2', Promise.resolve(result), false, mock)
  },
  modifySecurityGroupRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySecurityGroupRules', 'EC2', Promise.reject(result), true, mock)
  },
  modifySnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySnapshotAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifySnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySnapshotAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifySnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySnapshotAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifySpotFleetRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySpotFleetRequest', 'EC2', Promise.resolve(result), true, mock)
  },
  modifySpotFleetRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySpotFleetRequest', 'EC2', Promise.resolve(result), false, mock)
  },
  modifySpotFleetRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySpotFleetRequest', 'EC2', Promise.reject(result), true, mock)
  },
  modifySubnetAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySubnetAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifySubnetAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySubnetAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifySubnetAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifySubnetAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTrafficMirrorFilterNetworkServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterNetworkServices', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTrafficMirrorFilterNetworkServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterNetworkServices', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTrafficMirrorFilterNetworkServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterNetworkServices', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTrafficMirrorFilterRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTrafficMirrorFilterRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterRule', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTrafficMirrorFilterRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorFilterRule', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTrafficMirrorSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorSession', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTrafficMirrorSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorSession', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTrafficMirrorSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTrafficMirrorSession', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGateway', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGateway', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGateway', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTransitGatewayPrefixListReference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTransitGatewayPrefixListReferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayPrefixListReference', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTransitGatewayPrefixListReferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayPrefixListReference', 'EC2', Promise.reject(result), true, mock)
  },
  modifyTransitGatewayVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyTransitGatewayVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyTransitGatewayVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyTransitGatewayVpcAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolume', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolume', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolume', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVolumeAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolumeAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVolumeAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolumeAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVolumeAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVolumeAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpoint', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpoint', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpoint', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcEndpointConnectionNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointConnectionNotification', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcEndpointConnectionNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointConnectionNotification', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcEndpointConnectionNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointConnectionNotification', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcEndpointServiceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServiceConfiguration', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcEndpointServiceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServiceConfiguration', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcEndpointServiceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServiceConfiguration', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcEndpointServicePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServicePermissions', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcEndpointServicePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServicePermissions', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcEndpointServicePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcEndpointServicePermissions', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcPeeringConnectionOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcPeeringConnectionOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcPeeringConnectionOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcPeeringConnectionOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcPeeringConnectionOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcPeeringConnectionOptions', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpcTenancy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcTenancy', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpcTenancyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcTenancy', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpcTenancyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpcTenancy', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpnConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpnConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpnConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnection', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpnConnectionOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnectionOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpnConnectionOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnectionOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpnConnectionOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnConnectionOptions', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpnTunnelCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelCertificate', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpnTunnelCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelCertificate', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpnTunnelCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelCertificate', 'EC2', Promise.reject(result), true, mock)
  },
  modifyVpnTunnelOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelOptions', 'EC2', Promise.resolve(result), true, mock)
  },
  modifyVpnTunnelOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelOptions', 'EC2', Promise.resolve(result), false, mock)
  },
  modifyVpnTunnelOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'modifyVpnTunnelOptions', 'EC2', Promise.reject(result), true, mock)
  },
  monitorInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'monitorInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  monitorInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'monitorInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  monitorInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'monitorInstances', 'EC2', Promise.reject(result), true, mock)
  },
  moveAddressToVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'moveAddressToVpc', 'EC2', Promise.resolve(result), true, mock)
  },
  moveAddressToVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'moveAddressToVpc', 'EC2', Promise.resolve(result), false, mock)
  },
  moveAddressToVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'moveAddressToVpc', 'EC2', Promise.reject(result), true, mock)
  },
  provisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'provisionByoipCidr', 'EC2', Promise.resolve(result), true, mock)
  },
  provisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'provisionByoipCidr', 'EC2', Promise.resolve(result), false, mock)
  },
  provisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'provisionByoipCidr', 'EC2', Promise.reject(result), true, mock)
  },
  purchaseHostReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseHostReservation', 'EC2', Promise.resolve(result), true, mock)
  },
  purchaseHostReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseHostReservation', 'EC2', Promise.resolve(result), false, mock)
  },
  purchaseHostReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseHostReservation', 'EC2', Promise.reject(result), true, mock)
  },
  purchaseReservedInstancesOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseReservedInstancesOffering', 'EC2', Promise.resolve(result), true, mock)
  },
  purchaseReservedInstancesOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseReservedInstancesOffering', 'EC2', Promise.resolve(result), false, mock)
  },
  purchaseReservedInstancesOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseReservedInstancesOffering', 'EC2', Promise.reject(result), true, mock)
  },
  purchaseScheduledInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseScheduledInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  purchaseScheduledInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseScheduledInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  purchaseScheduledInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'purchaseScheduledInstances', 'EC2', Promise.reject(result), true, mock)
  },
  rebootInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rebootInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  rebootInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rebootInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  rebootInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rebootInstances', 'EC2', Promise.reject(result), true, mock)
  },
  registerImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerImage', 'EC2', Promise.resolve(result), true, mock)
  },
  registerImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerImage', 'EC2', Promise.resolve(result), false, mock)
  },
  registerImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerImage', 'EC2', Promise.reject(result), true, mock)
  },
  registerInstanceEventNotificationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), true, mock)
  },
  registerInstanceEventNotificationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerInstanceEventNotificationAttributes', 'EC2', Promise.resolve(result), false, mock)
  },
  registerInstanceEventNotificationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerInstanceEventNotificationAttributes', 'EC2', Promise.reject(result), true, mock)
  },
  registerTransitGatewayMulticastGroupMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupMembers', 'EC2', Promise.resolve(result), true, mock)
  },
  registerTransitGatewayMulticastGroupMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupMembers', 'EC2', Promise.resolve(result), false, mock)
  },
  registerTransitGatewayMulticastGroupMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupMembers', 'EC2', Promise.reject(result), true, mock)
  },
  registerTransitGatewayMulticastGroupSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupSources', 'EC2', Promise.resolve(result), true, mock)
  },
  registerTransitGatewayMulticastGroupSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupSources', 'EC2', Promise.resolve(result), false, mock)
  },
  registerTransitGatewayMulticastGroupSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'registerTransitGatewayMulticastGroupSources', 'EC2', Promise.reject(result), true, mock)
  },
  rejectTransitGatewayMulticastDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), true, mock)
  },
  rejectTransitGatewayMulticastDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayMulticastDomainAssociations', 'EC2', Promise.resolve(result), false, mock)
  },
  rejectTransitGatewayMulticastDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayMulticastDomainAssociations', 'EC2', Promise.reject(result), true, mock)
  },
  rejectTransitGatewayPeeringAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  rejectTransitGatewayPeeringAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayPeeringAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  rejectTransitGatewayPeeringAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayPeeringAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  rejectTransitGatewayVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), true, mock)
  },
  rejectTransitGatewayVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayVpcAttachment', 'EC2', Promise.resolve(result), false, mock)
  },
  rejectTransitGatewayVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectTransitGatewayVpcAttachment', 'EC2', Promise.reject(result), true, mock)
  },
  rejectVpcEndpointConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcEndpointConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  rejectVpcEndpointConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcEndpointConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  rejectVpcEndpointConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcEndpointConnections', 'EC2', Promise.reject(result), true, mock)
  },
  rejectVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcPeeringConnection', 'EC2', Promise.resolve(result), true, mock)
  },
  rejectVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcPeeringConnection', 'EC2', Promise.resolve(result), false, mock)
  },
  rejectVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'rejectVpcPeeringConnection', 'EC2', Promise.reject(result), true, mock)
  },
  releaseAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseAddress', 'EC2', Promise.resolve(result), true, mock)
  },
  releaseAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseAddress', 'EC2', Promise.resolve(result), false, mock)
  },
  releaseAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseAddress', 'EC2', Promise.reject(result), true, mock)
  },
  releaseHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseHosts', 'EC2', Promise.resolve(result), true, mock)
  },
  releaseHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseHosts', 'EC2', Promise.resolve(result), false, mock)
  },
  releaseHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'releaseHosts', 'EC2', Promise.reject(result), true, mock)
  },
  replaceIamInstanceProfileAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceIamInstanceProfileAssociation', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceIamInstanceProfileAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceIamInstanceProfileAssociation', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceIamInstanceProfileAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceIamInstanceProfileAssociation', 'EC2', Promise.reject(result), true, mock)
  },
  replaceNetworkAclAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclAssociation', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceNetworkAclAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclAssociation', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceNetworkAclAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclAssociation', 'EC2', Promise.reject(result), true, mock)
  },
  replaceNetworkAclEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclEntry', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceNetworkAclEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclEntry', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceNetworkAclEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceNetworkAclEntry', 'EC2', Promise.reject(result), true, mock)
  },
  replaceRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRoute', 'EC2', Promise.reject(result), true, mock)
  },
  replaceRouteTableAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRouteTableAssociation', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceRouteTableAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRouteTableAssociation', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceRouteTableAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceRouteTableAssociation', 'EC2', Promise.reject(result), true, mock)
  },
  replaceTransitGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceTransitGatewayRoute', 'EC2', Promise.resolve(result), true, mock)
  },
  replaceTransitGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceTransitGatewayRoute', 'EC2', Promise.resolve(result), false, mock)
  },
  replaceTransitGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'replaceTransitGatewayRoute', 'EC2', Promise.reject(result), true, mock)
  },
  reportInstanceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'reportInstanceStatus', 'EC2', Promise.resolve(result), true, mock)
  },
  reportInstanceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'reportInstanceStatus', 'EC2', Promise.resolve(result), false, mock)
  },
  reportInstanceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'reportInstanceStatus', 'EC2', Promise.reject(result), true, mock)
  },
  requestSpotFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotFleet', 'EC2', Promise.resolve(result), true, mock)
  },
  requestSpotFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotFleet', 'EC2', Promise.resolve(result), false, mock)
  },
  requestSpotFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotFleet', 'EC2', Promise.reject(result), true, mock)
  },
  requestSpotInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  requestSpotInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  requestSpotInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'requestSpotInstances', 'EC2', Promise.reject(result), true, mock)
  },
  resetAddressAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetAddressAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetAddressAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetAddressAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetAddressAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetAddressAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  resetEbsDefaultKmsKeyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), true, mock)
  },
  resetEbsDefaultKmsKeyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetEbsDefaultKmsKeyId', 'EC2', Promise.resolve(result), false, mock)
  },
  resetEbsDefaultKmsKeyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetEbsDefaultKmsKeyId', 'EC2', Promise.reject(result), true, mock)
  },
  resetFpgaImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetFpgaImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetFpgaImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetFpgaImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetFpgaImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetFpgaImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  resetImageAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetImageAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetImageAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetImageAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetImageAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetImageAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  resetInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetInstanceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetInstanceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetInstanceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  resetNetworkInterfaceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetNetworkInterfaceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetNetworkInterfaceAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetNetworkInterfaceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetNetworkInterfaceAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  resetSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetSnapshotAttribute', 'EC2', Promise.resolve(result), true, mock)
  },
  resetSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetSnapshotAttribute', 'EC2', Promise.resolve(result), false, mock)
  },
  resetSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'resetSnapshotAttribute', 'EC2', Promise.reject(result), true, mock)
  },
  restoreAddressToClassic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreAddressToClassic', 'EC2', Promise.resolve(result), true, mock)
  },
  restoreAddressToClassicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreAddressToClassic', 'EC2', Promise.resolve(result), false, mock)
  },
  restoreAddressToClassicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreAddressToClassic', 'EC2', Promise.reject(result), true, mock)
  },
  restoreManagedPrefixListVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreManagedPrefixListVersion', 'EC2', Promise.resolve(result), true, mock)
  },
  restoreManagedPrefixListVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreManagedPrefixListVersion', 'EC2', Promise.resolve(result), false, mock)
  },
  restoreManagedPrefixListVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'restoreManagedPrefixListVersion', 'EC2', Promise.reject(result), true, mock)
  },
  revokeClientVpnIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeClientVpnIngress', 'EC2', Promise.resolve(result), true, mock)
  },
  revokeClientVpnIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeClientVpnIngress', 'EC2', Promise.resolve(result), false, mock)
  },
  revokeClientVpnIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeClientVpnIngress', 'EC2', Promise.reject(result), true, mock)
  },
  revokeSecurityGroupEgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupEgress', 'EC2', Promise.resolve(result), true, mock)
  },
  revokeSecurityGroupEgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupEgress', 'EC2', Promise.resolve(result), false, mock)
  },
  revokeSecurityGroupEgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupEgress', 'EC2', Promise.reject(result), true, mock)
  },
  revokeSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupIngress', 'EC2', Promise.resolve(result), true, mock)
  },
  revokeSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupIngress', 'EC2', Promise.resolve(result), false, mock)
  },
  revokeSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'revokeSecurityGroupIngress', 'EC2', Promise.reject(result), true, mock)
  },
  runInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  runInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  runInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runInstances', 'EC2', Promise.reject(result), true, mock)
  },
  runScheduledInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runScheduledInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  runScheduledInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runScheduledInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  runScheduledInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'runScheduledInstances', 'EC2', Promise.reject(result), true, mock)
  },
  searchLocalGatewayRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchLocalGatewayRoutes', 'EC2', Promise.resolve(result), true, mock)
  },
  searchLocalGatewayRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchLocalGatewayRoutes', 'EC2', Promise.resolve(result), false, mock)
  },
  searchLocalGatewayRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchLocalGatewayRoutes', 'EC2', Promise.reject(result), true, mock)
  },
  searchTransitGatewayMulticastGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayMulticastGroups', 'EC2', Promise.resolve(result), true, mock)
  },
  searchTransitGatewayMulticastGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayMulticastGroups', 'EC2', Promise.resolve(result), false, mock)
  },
  searchTransitGatewayMulticastGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayMulticastGroups', 'EC2', Promise.reject(result), true, mock)
  },
  searchTransitGatewayRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayRoutes', 'EC2', Promise.resolve(result), true, mock)
  },
  searchTransitGatewayRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayRoutes', 'EC2', Promise.resolve(result), false, mock)
  },
  searchTransitGatewayRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'searchTransitGatewayRoutes', 'EC2', Promise.reject(result), true, mock)
  },
  sendDiagnosticInterrupt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'sendDiagnosticInterrupt', 'EC2', Promise.resolve(result), true, mock)
  },
  sendDiagnosticInterruptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'sendDiagnosticInterrupt', 'EC2', Promise.resolve(result), false, mock)
  },
  sendDiagnosticInterruptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'sendDiagnosticInterrupt', 'EC2', Promise.reject(result), true, mock)
  },
  startInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  startInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  startInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startInstances', 'EC2', Promise.reject(result), true, mock)
  },
  startNetworkInsightsAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startNetworkInsightsAnalysis', 'EC2', Promise.resolve(result), true, mock)
  },
  startNetworkInsightsAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startNetworkInsightsAnalysis', 'EC2', Promise.resolve(result), false, mock)
  },
  startNetworkInsightsAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startNetworkInsightsAnalysis', 'EC2', Promise.reject(result), true, mock)
  },
  startVpcEndpointServicePrivateDnsVerification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startVpcEndpointServicePrivateDnsVerification', 'EC2', Promise.resolve(result), true, mock)
  },
  startVpcEndpointServicePrivateDnsVerificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startVpcEndpointServicePrivateDnsVerification', 'EC2', Promise.resolve(result), false, mock)
  },
  startVpcEndpointServicePrivateDnsVerificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'startVpcEndpointServicePrivateDnsVerification', 'EC2', Promise.reject(result), true, mock)
  },
  stopInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'stopInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  stopInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'stopInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  stopInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'stopInstances', 'EC2', Promise.reject(result), true, mock)
  },
  terminateClientVpnConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateClientVpnConnections', 'EC2', Promise.resolve(result), true, mock)
  },
  terminateClientVpnConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateClientVpnConnections', 'EC2', Promise.resolve(result), false, mock)
  },
  terminateClientVpnConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateClientVpnConnections', 'EC2', Promise.reject(result), true, mock)
  },
  terminateInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  terminateInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  terminateInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'terminateInstances', 'EC2', Promise.reject(result), true, mock)
  },
  unassignIpv6Addresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignIpv6Addresses', 'EC2', Promise.resolve(result), true, mock)
  },
  unassignIpv6AddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignIpv6Addresses', 'EC2', Promise.resolve(result), false, mock)
  },
  unassignIpv6AddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignIpv6Addresses', 'EC2', Promise.reject(result), true, mock)
  },
  unassignPrivateIpAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignPrivateIpAddresses', 'EC2', Promise.resolve(result), true, mock)
  },
  unassignPrivateIpAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignPrivateIpAddresses', 'EC2', Promise.resolve(result), false, mock)
  },
  unassignPrivateIpAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unassignPrivateIpAddresses', 'EC2', Promise.reject(result), true, mock)
  },
  unmonitorInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unmonitorInstances', 'EC2', Promise.resolve(result), true, mock)
  },
  unmonitorInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unmonitorInstances', 'EC2', Promise.resolve(result), false, mock)
  },
  unmonitorInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'unmonitorInstances', 'EC2', Promise.reject(result), true, mock)
  },
  updateSecurityGroupRuleDescriptionsEgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsEgress', 'EC2', Promise.resolve(result), true, mock)
  },
  updateSecurityGroupRuleDescriptionsEgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsEgress', 'EC2', Promise.resolve(result), false, mock)
  },
  updateSecurityGroupRuleDescriptionsEgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsEgress', 'EC2', Promise.reject(result), true, mock)
  },
  updateSecurityGroupRuleDescriptionsIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsIngress', 'EC2', Promise.resolve(result), true, mock)
  },
  updateSecurityGroupRuleDescriptionsIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsIngress', 'EC2', Promise.resolve(result), false, mock)
  },
  updateSecurityGroupRuleDescriptionsIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'updateSecurityGroupRuleDescriptionsIngress', 'EC2', Promise.reject(result), true, mock)
  },
  withdrawByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'withdrawByoipCidr', 'EC2', Promise.resolve(result), true, mock)
  },
  withdrawByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'withdrawByoipCidr', 'EC2', Promise.resolve(result), false, mock)
  },
  withdrawByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'withdrawByoipCidr', 'EC2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'send', 'EC2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'send', 'EC2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2', 'send', 'EC2Client', Promise.reject(result), true, mock)
  }
}