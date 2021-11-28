# jest-aws-simple-mock
This library provides simple mock methods for aws-sdk in Jest testing.

SDK references are here.  

[AWS SDK for Javascript Version 2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)  
[AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)
[DynamoDB Data Mapper](https://github.com/awslabs/dynamodb-data-mapper-js)

# [Important Note]
Version 0.8.0 has a breaking changes from previous version.
## Breaking changes
- [AWS-SDK-V3] mockSesV2 was deprecated. use mockSESv2 instead.

- [AWS-SDK-V2] mockAcm was deprecated. use mockACM instead.
- [AWS-SDK-V2] mockAcm was deprecated. use mockACM instead.
- [AWS-SDK-V2] mockSes was deprecated. use mockSES instead.
- [AWS-SDK-V2] mockSesV2 was deprecated. use mockSESV2 instead.
- [AWS-SDK-V2] mockEcs was deprecated. use mockECS instead.
- [AWS-SDK-V2] mockSsm was deprecated. use mockSSM instead.
- [AWS-SDK-V2] mockKms was deprecated. use mockKMS instead.

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
import { MockChain } from 'jest-aws-simple-mock'

const chain = new MockChain()
chain
  .append('spyLambdaInvoke', mockLambda.invoke, {}) // (1): mock for 1st lambda invoke
  .append('spyDynamoGet', mockDynamoDB.getItem, {}) // (2): mock for dynamodb getItem
  .append('spyDynamoUpdate', mockDynamoDB.updateItem, {}) // (3): mock for dynamodb updateItem
  .append('spyLambdaInvoke', mockLambda.invoke, {}) // (4): mock for 2nd lambda invoke (by specify the same name of the (1))
  
const spy = chain.spies.spyLambdaInvoke
expect(spy).toHaveBeenCalled()

```

# For DynamoDB DataMapper
use mockDynamo module

```ts
import { mockDynamo } from 'jest-aws-simple-mock'
import { DataMapper } from '@aws/dynamodb-data-mapper'
const dataMapper = new DataMapper({Client: new DynamoDB()})
mockDynamo.query([{a}, {b}])

const q = query(...)

let res = []
for await (const data of q) res.push(data)

// res ==> [{a}, {b}]
return res

```
