
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
  export const mockServiceCatalog = {
  acceptPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  acceptPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  acceptPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateBudgetWithResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBudgetWithResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateBudgetWithResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBudgetWithResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateBudgetWithResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBudgetWithResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associatePrincipalWithPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associatePrincipalWithPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associatePrincipalWithPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePrincipalWithPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateProductWithPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProductWithPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateProductWithPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProductWithPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateProductWithPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProductWithPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateServiceActionWithProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateServiceActionWithProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateServiceActionWithProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  associateTagOptionWithResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTagOptionWithResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  associateTagOptionWithResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTagOptionWithResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  associateTagOptionWithResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTagOptionWithResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  batchAssociateServiceActionWithProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateServiceActionWithProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  batchDisassociateServiceActionFromProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  copyProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  copyProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  copyProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  createTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  createTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  createTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deletePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deletePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deletePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deletePortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deletePortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deletePortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  deleteTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  deleteTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  deleteTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeCopyProductStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyProductStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeCopyProductStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyProductStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeCopyProductStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyProductStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolioShareStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShareStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioShareStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShareStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioShareStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShareStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describePortfolioShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShares', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describePortfolioSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShares', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describePortfolioSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePortfolioShares', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProductAsAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductAsAdmin', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductAsAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductAsAdmin', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductAsAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductAsAdmin', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProductView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductView', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProductViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductView', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProductViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProductView', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeProvisioningParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningParameters', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeProvisioningParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningParameters', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeProvisioningParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProvisioningParameters', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecord', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecord', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecord', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeServiceActionExecutionParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeServiceActionExecutionParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeServiceActionExecutionParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServiceActionExecutionParameters', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  describeTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  describeTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  describeTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disableAWSOrganizationsAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disableAWSOrganizationsAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disableAWSOrganizationsAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSOrganizationsAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateBudgetFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBudgetFromResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateBudgetFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBudgetFromResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateBudgetFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBudgetFromResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociatePrincipalFromPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociatePrincipalFromPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociatePrincipalFromPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociatePrincipalFromPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateProductFromPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateProductFromPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateProductFromPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateProductFromPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateProductFromPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateProductFromPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateServiceActionFromProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateServiceActionFromProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateServiceActionFromProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateServiceActionFromProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  disassociateTagOptionFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTagOptionFromResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  disassociateTagOptionFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTagOptionFromResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  disassociateTagOptionFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTagOptionFromResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  enableAWSOrganizationsAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  enableAWSOrganizationsAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  enableAWSOrganizationsAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSOrganizationsAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  executeProvisionedProductPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  executeProvisionedProductPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductPlan', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  executeProvisionedProductPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductPlan', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  executeProvisionedProductServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  executeProvisionedProductServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  executeProvisionedProductServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeProvisionedProductServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  getAWSOrganizationsAccessStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  getAWSOrganizationsAccessStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  getAWSOrganizationsAccessStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAWSOrganizationsAccessStatus', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  getProvisionedProductOutputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedProductOutputs', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  getProvisionedProductOutputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedProductOutputs', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  getProvisionedProductOutputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedProductOutputs', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  importAsProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAsProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  importAsProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAsProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  importAsProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAsProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listAcceptedPortfolioShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAcceptedPortfolioShares', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listAcceptedPortfolioSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAcceptedPortfolioShares', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listAcceptedPortfolioSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAcceptedPortfolioShares', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listBudgetsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBudgetsForResource', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listBudgetsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBudgetsForResource', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listBudgetsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBudgetsForResource', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listConstraintsForPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConstraintsForPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listConstraintsForPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConstraintsForPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listConstraintsForPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConstraintsForPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listLaunchPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchPaths', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listLaunchPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchPaths', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listLaunchPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchPaths', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listOrganizationPortfolioAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listOrganizationPortfolioAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listOrganizationPortfolioAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationPortfolioAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfolioAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfolioAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolioAccess', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfolioAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolioAccess', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfolios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolios', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfoliosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolios', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfoliosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfolios', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPortfoliosForProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfoliosForProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPortfoliosForProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfoliosForProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPortfoliosForProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPortfoliosForProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listPrincipalsForPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipalsForPortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listPrincipalsForPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipalsForPortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listPrincipalsForPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipalsForPortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisionedProductPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedProductPlans', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisionedProductPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedProductPlans', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisionedProductPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedProductPlans', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisioningArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifacts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisioningArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifacts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisioningArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifacts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listProvisioningArtifactsForServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listProvisioningArtifactsForServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listProvisioningArtifactsForServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisioningArtifactsForServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listRecordHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordHistory', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listRecordHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordHistory', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listRecordHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordHistory', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listResourcesForTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listResourcesForTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listResourcesForTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listServiceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActions', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listServiceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActions', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listServiceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActions', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listServiceActionsForProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listServiceActionsForProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listServiceActionsForProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceActionsForProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listStackInstancesForProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listStackInstancesForProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listStackInstancesForProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStackInstancesForProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  listTagOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagOptions', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  listTagOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagOptions', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  listTagOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagOptions', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  provisionProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  provisionProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  provisionProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  rejectPortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectPortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  rejectPortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectPortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  rejectPortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectPortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  scanProvisionedProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scanProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  scanProvisionedProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scanProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  scanProvisionedProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scanProvisionedProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProductsAsAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProductsAsAdmin', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProductsAsAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProductsAsAdmin', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProductsAsAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProductsAsAdmin', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  searchProvisionedProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  searchProvisionedProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProvisionedProducts', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  searchProvisionedProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProvisionedProducts', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  terminateProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  terminateProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  terminateProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateConstraint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConstraint', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateConstraintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConstraint', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateConstraintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConstraint', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updatePortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolio', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updatePortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolio', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updatePortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolio', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updatePortfolioShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolioShare', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updatePortfolioShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolioShare', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updatePortfolioShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePortfolioShare', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisionedProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisionedProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProduct', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisionedProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProduct', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisionedProductProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProductProperties', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisionedProductPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProductProperties', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisionedProductPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisionedProductProperties', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateProvisioningArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateProvisioningArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisioningArtifact', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateProvisioningArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProvisioningArtifact', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateServiceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceAction', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateServiceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceAction', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateServiceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceAction', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
  updateTagOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTagOption', 'ServiceCatalog', Promise.resolve(result), true, mock)
  },
  updateTagOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTagOption', 'ServiceCatalog', Promise.resolve(result), false, mock)
  },
  updateTagOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTagOption', 'ServiceCatalog', Promise.reject(result), true, mock)
  },
}
