export type MockFunctionReturnSpy = (result: any, mock?: jest.SpyInstance) => jest.SpyInstance
export interface Mock {
    [method: string]: MockFunctionReturnSpy
}
