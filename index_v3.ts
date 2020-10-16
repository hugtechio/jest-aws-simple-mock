import { DynamoDB } from '@aws-sdk/client-dynamodb'

export const V3 = {
    mockDynamo: {
        getItem: (result: {}, mock?: jest.SpyInstance): jest.SpyInstance => {
            const m = mock 
            ? mock.mockImplementationOnce(
                () => Promise.resolve(result)
            )
            : jest.spyOn(DynamoDB.prototype, 'getItem').mockImplementationOnce(
                () => Promise.resolve(result)
            )
            return m
        },
        getItemAll: (result: {}): jest.SpyInstance => {
            const spy = jest.spyOn(DynamoDB.prototype, 'getItem').mockImplementation(
                () => Promise.resolve(result)
            )
            return spy
        },
        getItemThrow: (error: {}): jest.SpyInstance => {
            const spy = jest.spyOn(DynamoDB.prototype, 'getItem').mockImplementation(
                () => Promise.reject(error)
            )
            return spy
        }
    }
}