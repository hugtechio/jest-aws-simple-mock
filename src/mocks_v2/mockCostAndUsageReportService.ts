
/**
* @description mocks_v2:mockCostAndUsageReportService.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCostAndUsageReportService = {
  deleteReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', result, true, true, mock)
  },
  deleteReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', result, false, true, mock)
  },
  deleteReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', result, true, false, mock)
  },
  describeReportDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', result, true, true, mock)
  },
  describeReportDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', result, false, true, mock)
  },
  describeReportDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', result, true, false, mock)
  },
  modifyReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', result, true, true, mock)
  },
  modifyReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', result, false, true, mock)
  },
  modifyReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', result, true, false, mock)
  },
  putReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', result, true, true, mock)
  },
  putReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', result, false, true, mock)
  },
  putReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', result, true, false, mock)
  },
}
