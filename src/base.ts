export type MockFunctionReturnSpy = (
  result: any,
  mock?: jest.SpyInstance
) => jest.SpyInstance;
export interface Mock {
  [method: string]: MockFunctionReturnSpy;
}

// /**
//  *
//  * @param moduleName name of aws module(= npm library)
//  * @returns
//  */
// export async function dynamicImport(
//   moduleName: string
// ): Promise<any | undefined> {
//   try {
//     const mod = await import(moduleName);
//     return mod;
//   } catch (e) {
//     // ignore importing error
//     return undefined;
//   }
// }
