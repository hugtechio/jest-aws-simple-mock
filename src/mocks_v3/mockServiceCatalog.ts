
/**
* @description mocks_v3:mockServiceCatalog module is mocks for AWS-SDK V3
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
export const mockServiceCatalog = {
  acceptPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'acceptPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  acceptPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'acceptPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  acceptPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'acceptPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateBudgetWithResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateBudgetWithResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateBudgetWithResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateBudgetWithResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateBudgetWithResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateBudgetWithResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associatePrincipalWithPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associatePrincipalWithPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associatePrincipalWithPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateProductWithPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateProductWithPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateProductWithPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateProductWithPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateProductWithPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateProductWithPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateServiceActionWithProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateServiceActionWithProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateServiceActionWithProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateTagOptionWithResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateTagOptionWithResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateTagOptionWithResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateTagOptionWithResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateTagOptionWithResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'associateTagOptionWithResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  copyProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'copyProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  copyProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'copyProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  copyProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'copyProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'createTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deletePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deletePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deletePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deletePortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deletePortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deletePortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deletePortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'deleteTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeCopyProductStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeCopyProductStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeCopyProductStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeCopyProductStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeCopyProductStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeCopyProductStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolioShareStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShareStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioShareStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShareStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioShareStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShareStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolioShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShares', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShares', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describePortfolioShares', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProductAsAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductAsAdmin', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductAsAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductAsAdmin', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductAsAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductAsAdmin', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProductView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductView', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductView', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProductView', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisioningParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningParameters', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisioningParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningParameters', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisioningParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeProvisioningParameters', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeRecord', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeRecord', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeRecord', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeServiceActionExecutionParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeServiceActionExecutionParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeServiceActionExecutionParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'describeTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disableAWSOrganizationsAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disableAWSOrganizationsAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disableAWSOrganizationsAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateBudgetFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateBudgetFromResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateBudgetFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateBudgetFromResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateBudgetFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateBudgetFromResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociatePrincipalFromPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociatePrincipalFromPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociatePrincipalFromPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateProductFromPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateProductFromPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateProductFromPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateProductFromPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateProductFromPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateProductFromPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateServiceActionFromProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateServiceActionFromProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateServiceActionFromProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateTagOptionFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateTagOptionFromResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateTagOptionFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateTagOptionFromResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateTagOptionFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'disassociateTagOptionFromResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  enableAWSOrganizationsAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  enableAWSOrganizationsAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  enableAWSOrganizationsAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  executeProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  executeProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  executeProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  executeProvisionedProductServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  executeProvisionedProductServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  executeProvisionedProductServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  getAWSOrganizationsAccessStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  getAWSOrganizationsAccessStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  getAWSOrganizationsAccessStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  getProvisionedProductOutputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getProvisionedProductOutputs', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  getProvisionedProductOutputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getProvisionedProductOutputs', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  getProvisionedProductOutputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'getProvisionedProductOutputs', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  importAsProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'importAsProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  importAsProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'importAsProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  importAsProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'importAsProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listAcceptedPortfolioShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listAcceptedPortfolioShares', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listAcceptedPortfolioSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listAcceptedPortfolioShares', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listAcceptedPortfolioSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listAcceptedPortfolioShares', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listBudgetsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listBudgetsForResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listBudgetsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listBudgetsForResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listBudgetsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listBudgetsForResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listConstraintsForPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listConstraintsForPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listConstraintsForPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listConstraintsForPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listConstraintsForPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listConstraintsForPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listLaunchPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listLaunchPaths', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listLaunchPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listLaunchPaths', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listLaunchPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listLaunchPaths', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listOrganizationPortfolioAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listOrganizationPortfolioAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listOrganizationPortfolioAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfolioAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfolioAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfolioAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolioAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfolios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolios', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfoliosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolios', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfoliosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfolios', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfoliosForProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfoliosForProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfoliosForProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfoliosForProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfoliosForProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPortfoliosForProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPrincipalsForPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPrincipalsForPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPrincipalsForPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPrincipalsForPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPrincipalsForPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listPrincipalsForPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisionedProductPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisionedProductPlans', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisionedProductPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisionedProductPlans', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisionedProductPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisionedProductPlans', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisioningArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifacts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisioningArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifacts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisioningArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifacts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisioningArtifactsForServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisioningArtifactsForServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisioningArtifactsForServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listRecordHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listRecordHistory', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listRecordHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listRecordHistory', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listRecordHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listRecordHistory', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listResourcesForTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listResourcesForTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listResourcesForTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listResourcesForTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listResourcesForTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listResourcesForTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listServiceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActions', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listServiceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActions', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listServiceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActions', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listServiceActionsForProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listServiceActionsForProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listServiceActionsForProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listStackInstancesForProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listStackInstancesForProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listStackInstancesForProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listTagOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listTagOptions', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listTagOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listTagOptions', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listTagOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'listTagOptions', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  notifyProvisionProductEngineWorkflowResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyProvisionProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  notifyProvisionProductEngineWorkflowResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyProvisionProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  notifyProvisionProductEngineWorkflowResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyProvisionProductEngineWorkflowResult', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  notifyTerminateProvisionedProductEngineWorkflowResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyTerminateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  notifyTerminateProvisionedProductEngineWorkflowResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyTerminateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  notifyTerminateProvisionedProductEngineWorkflowResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyTerminateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  notifyUpdateProvisionedProductEngineWorkflowResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyUpdateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  notifyUpdateProvisionedProductEngineWorkflowResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyUpdateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  notifyUpdateProvisionedProductEngineWorkflowResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'notifyUpdateProvisionedProductEngineWorkflowResult', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  provisionProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'provisionProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  provisionProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'provisionProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  provisionProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'provisionProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  rejectPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'rejectPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  rejectPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'rejectPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  rejectPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'rejectPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  scanProvisionedProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'scanProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  scanProvisionedProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'scanProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  scanProvisionedProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'scanProvisionedProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProductsAsAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProductsAsAdmin', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProductsAsAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProductsAsAdmin', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProductsAsAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProductsAsAdmin', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProvisionedProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProvisionedProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProvisionedProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'searchProvisionedProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  terminateProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'terminateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  terminateProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'terminateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  terminateProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'terminateProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updatePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updatePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updatePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updatePortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updatePortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updatePortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updatePortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisionedProductProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProductProperties', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisionedProductPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProductProperties', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisionedProductPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisionedProductProperties', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'updateTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'send', 'ServiceCatalogClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'send', 'ServiceCatalogClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog', 'send', 'ServiceCatalogClient', Promise.reject(result), true, mock)
  }
}
