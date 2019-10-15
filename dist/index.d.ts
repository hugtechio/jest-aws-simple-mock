/// <reference types="jest" />
export declare const mockStripe: {
    once: (payload?: {} | undefined) => jest.SpyInstance<any, any>;
    twice: (payload1: {}, payload2: {}) => jest.SpyInstance<any, any>;
    three: (payload1: {}, payload2: {}, payload3: {}) => jest.SpyInstance<any, any>;
};
export declare const mockDynamo: {
    query: (queryResult: any) => jest.SpyInstance<any, any>;
    queryTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    get: (result: any) => jest.SpyInstance<any, any>;
    getTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any) => jest.SpyInstance<any, any>;
    delete: (result: any) => jest.SpyInstance<any, any>;
    batchDelete: (result: any) => jest.SpyInstance<any, any>;
    throw: () => jest.SpyInstance<any, any>;
};
export declare const mockLambda: {
    invoke: (payload?: {}) => jest.SpyInstance<any, any>;
};
export declare const mockS3: {
    getSignedUrl: (url: string) => jest.SpyInstance<any, any>;
};
