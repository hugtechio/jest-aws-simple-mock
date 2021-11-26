# jest-aws-simple-mock
This library provides simple mock methods for aws-sdk in Jest testing.

**Supported AWS-SDK**
- @aws/dynamodb-datamapper
- aws-sdk(version 2)
- @aws-sdk(version 3)

# install

**yarn**
```
yarn add jest-aws-simple-mock --dev
```

**npm**
```
npm install jest-aws-simple-mock --save-dev
```

# Exported modules

```ts
export * from './mocks_v2' // For AWS-SDK version 2
export * as V2 from './mocks_v2' // Alias for AWS-SDK version 2 (Same as the above)
export * as V3 from './mocks_v3' // For AWS-SDK version 3
export * from './chain' // Mock chaining Utility
```

# Basic Usage

1. All modules named as "mock + [AWS SDK Client Name]"  
For example, if you want to mock ACM module, mock name is "mockACM".

2. All methods has 3 types of mock behavior("OneShot", "Entire", "Rejection")
    - OneShot type mocks only the call.
    - Entire type mocks all calls.
    - Rejection type mocks as Promise.reject. 

For example, If you want to mock S3.putObject, this library provides following mock options.

```ts
  // This is OneShot mock method. Would be mocked only at the call.
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', Promise.resolve(result), true, mock)
  },
  // This is Entire mock method. Would be mocked all calls.
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', Promise.resolve(result), false, mock)
  },

  // This is Rejection mock method. Promise.reject would be rose. 
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', Promise.reject(result), true, mock)
  },
```

# Chaining Utility
For complex mocking, You can use mock chaining object.

Let you make concern these example.

Sample.ts
```ts
function a () {
    const res = Lambda.invoke(...)
    :
    const res = DynamoDB.getItem(...)
    :
    const res = DynamoDB.updateItem(...)
    :
    const res = Lambda.invoke(...)
}
```

SampleMock.ts
```ts

const chain = new MockChain()
chain
  .append('spyLambdaInvoke', mockLambda.invoke, {}) // (1): mock for 1st lambda invoke
  .append('spyDynamoGet', mockDynamoDB.getItem, {}) // (2): mock for dynamodb getItem
  .append('spyDynamoUpdate', mockDynamoDB.updateItem, {}) // (3): mock for dynamodb updateItem
  .append('spyLambdaInvoke', mockLambda.invoke, {}) // (4): mock for 2nd lambda invoke (by specify the same name of the (1)) 

```
