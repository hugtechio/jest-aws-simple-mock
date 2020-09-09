# jest-aws-simple-mock
The jest-aws-simple-mock is simple aws sdk mocking library.
Currently only compatible AWS-SDK v2


## Mockable module

- @aws/dynamodb-datamapper
- aws-sdk(vesion2)  **not all services.**

## Basic Usage
```
import { mock<ServiceName> } from 'jest-aws-simple-mock'

let spy mock<ServiceName>.<methodName>(<<returns>>)
```

This example is to mock dynamodb data mapper, 

```javascript
import { mockDynamo } from 'jest-aws-simple-mock'

mockDynamo.query([{ key: 'dummyReturn1'}, {key: dummyReturn2}])
```


## Features

### mocking dynamodb datamapper
[dynamodb-data-mappar-js](https://github.com/awslabs/dynamodb-data-mapper-js/)

```javascript
import { mockDynamo } from 'jest-aws-simple-mock'

mockDynamo.query([{1}, {2}])
mockDynamo.get({3})
```


## Samples

## AWS Lambda
```
import { mockLambda } from 'jest-aws-simple-mock'

let spyLambda = mockLambda.invoke({
  StatusCode: 200,
  Payload: JSON.stringify({
    hoge: 1
  })
})

```

## DynamoDB Data Mapper
```
import { mockDynamo } from 'jest-aws-simple-mock'

mockDynamo.query([{1}, {2}])
mockDynamo.get({3})

```

## DynamoDB Document Client
```
import { mockDynamoDocClient } from 'jest-aws-simple-mock'
mockDynamoDocClient.get({Item: {xxxxx}}
```

To see all functions which current handled, check below.


# Mocking pattern
Jest-aws-simple-mock generate 3 types mock which return different result.


### mock at once (only mock first invocation)
This mocking invocation is to mock only a call of target function.

```javascript
mockLambda.invoke(resultObject)
```

### mock All invocation (mocking all calls of target function)
This mocking invocation is to mock **all** calls of target function.

```javascript
mockLambda.invokeAll(resultObject}
```


### mock with throw
This mocking invocation is to throw exception when target function was called.

```javascript
mockLambda.invokeThrow(resultObject}
```


## mock chaining
when you want to mock target function only several times in all calls. 
You can chain mock object.

these example, when the lamba.invoke is called more than 3 times in your logic, 
only first 2 calls is mocked.

```javascript
let mock = mockLambda.invoke(result1) <-- first call mocking
mock = mockLambda.invoke(result2, mock) <-- second call mocking
```



# all mockable functions and utilities (2020.09.09)

```javascript

/// <reference types="jest" />
export declare const mockAsyncIterator: (result: any) => any;
export declare const mockAsyncIteratorPage: (result: any, last?: boolean) => any;
export declare const currentVersion: (services: any) => any;
interface Mock {
    [method: string]: (result: any, mock?: jest.SpyInstance) => jest.SpyInstance;
}
export declare const genMock: (services: any, methods: string[]) => Mock;
export declare const mockDynamo: {
    query: (queryResult: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryPages: (queryResult: any, last?: boolean | undefined, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryFourth: (result1: any, result2: any, result3: any, result4: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryAll: (queryResult: any) => jest.SpyInstance<any, any>;
    get: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getAll: (result: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    putTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    putThrice: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    putAll: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateAll: (result: any) => jest.SpyInstance<any, any>;
    delete: (result: any) => jest.SpyInstance<any, any>;
    deleteTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    deleteThrice: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    deleteAll: (result: any) => jest.SpyInstance<any, any>;
    batchGet: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    batchGetAll: (result: any) => jest.SpyInstance<any, any>;
    batchDelete: (result: any) => jest.SpyInstance<any, any>;
    batchDeleteAll: (result: any) => jest.SpyInstance<any, any>;
    batchPut: (result: any) => jest.SpyInstance<any, any>;
    queryWithThrow: (mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getWithThrow: (mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    executeUpdateExpression: (result: any) => jest.SpyInstance<any, any>;
    executeUpdateExpressionAll: (result: any) => jest.SpyInstance<any, any>;
};
export declare const mockLambda: Mock;
export declare const mockS3: Mock;
export declare const mockCloudFront: Mock;
export declare const mockEventBridge: Mock;
export declare const mockStepFunctions: Mock;
export declare const mockSqs: {
    sendMessage: (result: {}) => jest.SpyInstance<any, any>;
    sendMessageAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockAcm: Mock;
export declare const mockCognitoIdp: Mock;
export declare const mockKms: Mock;
export declare const mockSsm: Mock;
export declare const mockDynamoDocClient: Mock;
export declare const mockEcs: Mock;
export {};

```
