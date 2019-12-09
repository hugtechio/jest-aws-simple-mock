# jest-aws-simple-mock
simple mocking aws sdk and dynamodb-datamapper by jest

# Example

```
import * as mock from 'jest-aws-simple-mock'

// Target function
import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
const dataMapper = new DataMapper({client: new DynamoDB()})

@table('Sample')
interface SampleModel {
    @hash_key()
    id: string;

    @attribute()
    name: string;

    @attribute()
    address: string;
}

function async target (input: string): Promise<boolean> {
    const query = dataMapper.query<SampleModel>(
        SampleModel,
        {id: input}
    )

    let result: boolean = false
    for await (const item of query) {
        if (item) {
            result = true
        }
    }
    return result
}


// test function
describe('Test Sample fnction', () => {
    beforeAll(() => {
        jest.resetAllMocks()
    })

    it ('expect result true', async () => {
        // mock result of dynamodb.query method for dynamodb data mapper.
        mock.mockDynamo.query([{id: 'id1', name: 'name1', address: 'address1'}])
        const result = await target('id')
        expect(result).toBeTruthy()
    })
})
```

# Exported functions(2019.12.09)
```
export declare const mockAsyncIterator: (result: any) => any;
export declare const currentVersion: (services: any) => any;
export declare const mockDynamo: {
    query: (queryResult: any) => jest.SpyInstance<any, any>;
    queryTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    get: (result: any) => jest.SpyInstance<any, any>;
    getTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    getThirth: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any) => jest.SpyInstance<any, any>;
    updateTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    delete: (result: any) => jest.SpyInstance<any, any>;
    batchDelete: (result: any) => jest.SpyInstance<any, any>;
    queryWithThrow: () => jest.SpyInstance<any, any>;
    getWIthThrow: () => jest.SpyInstance<any, any>;
};
export declare const mockLambda: {
    invoke: (payload?: {}) => jest.SpyInstance<any, any>;
};
export declare const mockS3: {
    headObject: (meta: {}) => jest.SpyInstance<any, any>;
    headObjectRejection: (exception: {}) => jest.SpyInstance<any, any>;
    getSignedUrl: (url: string) => jest.SpyInstance<any, any>;
};
export declare const mockCloudFront: {
    getDistribution: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionConfig: (result: {}) => jest.SpyInstance<any, any>;
    updateDistribution: (result: {}) => jest.SpyInstance<any, any>;
};

```
