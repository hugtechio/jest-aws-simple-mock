import { DynamoDB } from '@aws-sdk/client-dynamodb'

export const V3 = {
    mockDynamo: {
        getItem: (result: {}) => {
            const spy = jest.spyOn(DynamoDB.prototype, 'getItem').mockImplementationOnce(
                () => Promise.resolve(result)
            )
        }
    }
}