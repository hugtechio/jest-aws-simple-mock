import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { V3 } from '../index_v3'

describe('#index_v3', () => {
    describe('#dynamodb', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })

        it ('should be return dynamoDB mock', async () => {
            V3.mockDynamo.getItem({})
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result = await dynamodb.getItem({})
            expect(result).toEqual({})
        })

        it ('should be return dynamoDB mock(chaining)', async () => {
            let m = V3.mockDynamo.getItem({
                times:1
            })
            m = V3.mockDynamo.getItem({
                times:2
            }, m)
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 1})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 2})
        })

        it ('should be return dynamoDB mock(all)', async () => {
            let m = V3.mockDynamo.getItemAll({
                times: 'all'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 'all'})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 'all'})
        })

        it ('should be return dynamoDB mock(throw)', async () => {
            let m = V3.mockDynamo.getItemThrow({
                error: 'error'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            try {
                // @ts-ignore
                await dynamodb.getItem({})
                expect('Test fail').toBe(null)
            } catch (e) {
                expect(e).toEqual({error: 'error'})
            }
        })
    })
})