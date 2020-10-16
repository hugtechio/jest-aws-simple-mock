import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { V3 } from '../index_v3'

describe('#index_v3', () => {
    describe('#dynamodb', () => {
        it ('should be return dynamoDB mock', async () => {
            V3.mockDynamo.getItem({})
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result = await dynamodb.getItem({})
            expect(result).toEqual({})
        })
    })
})