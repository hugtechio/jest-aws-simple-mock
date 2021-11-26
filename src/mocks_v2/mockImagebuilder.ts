
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
  export const mockImagebuilder = {
  cancelImageCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelImageCreation', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  cancelImageCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelImageCreation', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  cancelImageCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelImageCreation', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createContainerRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createContainerRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createContainerRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createDistributionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createDistributionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createDistributionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImage', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImage', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImage', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createImagePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImagePipeline', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createImagePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImagePipeline', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createImagePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImagePipeline', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createImageRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createImageRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createImageRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  createInfrastructureConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  createInfrastructureConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  createInfrastructureConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInfrastructureConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteContainerRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteContainerRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteContainerRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteDistributionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteDistributionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteDistributionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistributionConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteImagePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePipeline', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteImagePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePipeline', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteImagePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePipeline', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteImageRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteImageRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteImageRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  deleteInfrastructureConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  deleteInfrastructureConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  deleteInfrastructureConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInfrastructureConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getComponentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentPolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getComponentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentPolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getComponentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentPolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getContainerRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getContainerRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getContainerRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getContainerRecipePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getContainerRecipePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getContainerRecipePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerRecipePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getDistributionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getDistributionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getDistributionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImage', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImage', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImage', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getImagePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePipeline', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getImagePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePipeline', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getImagePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePipeline', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getImagePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getImagePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getImagePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImagePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getImageRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipe', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getImageRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipe', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getImageRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipe', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getImageRecipePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getImageRecipePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getImageRecipePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImageRecipePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  getInfrastructureConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  getInfrastructureConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  getInfrastructureConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInfrastructureConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  importComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importComponent', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  importComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importComponent', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  importComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importComponent', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listComponentBuildVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentBuildVersions', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listComponentBuildVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentBuildVersions', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listComponentBuildVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentBuildVersions', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listContainerRecipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerRecipes', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listContainerRecipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerRecipes', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listContainerRecipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerRecipes', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listDistributionConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionConfigurations', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listDistributionConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionConfigurations', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listDistributionConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionConfigurations', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImageBuildVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageBuildVersions', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImageBuildVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageBuildVersions', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImageBuildVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageBuildVersions', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImagePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePackages', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImagePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePackages', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImagePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePackages', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImagePipelineImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelineImages', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImagePipelineImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelineImages', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImagePipelineImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelineImages', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImagePipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelines', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImagePipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelines', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImagePipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImagePipelines', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImageRecipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageRecipes', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImageRecipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageRecipes', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImageRecipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImageRecipes', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listInfrastructureConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInfrastructureConfigurations', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listInfrastructureConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInfrastructureConfigurations', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listInfrastructureConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInfrastructureConfigurations', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  putComponentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComponentPolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  putComponentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComponentPolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  putComponentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComponentPolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  putContainerRecipePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerRecipePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  putContainerRecipePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerRecipePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  putContainerRecipePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerRecipePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  putImagePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImagePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  putImagePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImagePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  putImagePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImagePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  putImageRecipePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageRecipePolicy', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  putImageRecipePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageRecipePolicy', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  putImageRecipePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageRecipePolicy', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  startImagePipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImagePipelineExecution', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  startImagePipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImagePipelineExecution', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  startImagePipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImagePipelineExecution', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  updateDistributionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  updateDistributionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  updateDistributionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  updateImagePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePipeline', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  updateImagePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePipeline', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  updateImagePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePipeline', 'Imagebuilder', Promise.reject(result), true, mock)
  },
  updateInfrastructureConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), true, mock)
  },
  updateInfrastructureConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInfrastructureConfiguration', 'Imagebuilder', Promise.resolve(result), false, mock)
  },
  updateInfrastructureConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInfrastructureConfiguration', 'Imagebuilder', Promise.reject(result), true, mock)
  },
}
