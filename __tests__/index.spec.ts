import * as target from '../index'
import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
import { DynamoDB } from 'aws-sdk'

describe('#index', () => {
    describe('#method currentVersion', () => {
        it('return valid service', async () => {
            const data = {
                '2015-01-01': {prototype: 'valid'},
                '2017-01-01': null,
                '2018-01-01': undefined
            }
            const service = target.currentVersion(data)
            expect(service).toEqual({prototype: 'valid'})
        })

        it('return null (not found)', async () => {
            const data = {
                '2015-01-01': null,
                '2017-01-01': null,
                '2018-01-01': undefined
            }
            const service = target.currentVersion(data)
            expect(service).toBe(null)
        })
    })

    describe('#getting mock object', () => {
        describe('#dynamodb data mapper', () => {
            it('#query', async () => {
                const result = await target.mockDynamo.query([{}])
                // @ts-ignore
                expect(result).toHaveProperty('mock')
            });
            
        });
        describe('#dynamodb doc client', () => {
            it('#get', async () => {
                const result = await target.mockDynamoDocClient.get({})
                // @ts-ignore
                expect(result).toHaveProperty('mock')
            }),
            it('#put', async () => {
                const result = await target.mockDynamoDocClient.put({})
                // @ts-ignore
                expect(result).toHaveProperty('mock')
            })
        })

        describe('#dynamodb data mapper', () => {
            beforeEach(() => {
                jest.restoreAllMocks()
            })

            it('#query (new)', async () => {
                const dataMapper = new DataMapper({client: new DynamoDB()})
                target.mockDynamo.query([{id: 1}])
                // @ts-ignore
                const q = dataMapper.query()
                let result = [] 
                for await (const item of q) {
                    result.push(item)
                }
                expect(result).toEqual([{id: 1}])
            });

            it('#query (add)', async () => {
                const dataMapper = new DataMapper({client: new DynamoDB()})
                let mock = target.mockDynamo.query([{id: 1}])
                target.mockDynamo.query([{id: 2}], mock)

                // @ts-ignore
                let q = dataMapper.query()
                let result = [] 
                for await (const item of q) {
                    result.push(item)
                }
                expect(result).toEqual([{id: 1}])

                // @ts-ignore
                q = dataMapper.query()
                result = [] 
                for await (const item of q) {
                    result.push(item)
                }
                expect(result).toEqual([{id: 2}])
                
            });

            it('#query (pages)', async () => {
                const dataMapper = new DataMapper({client: new DynamoDB()})
                let mock = target.mockDynamo.queryPages([[{id: 1}]])
                // @ts-ignore
                let q = dataMapper.query().pages()
                expect(q).toHaveProperty('lastEvaluatedKey')
                for await (const page of q) {
                    expect(Array.isArray(page)).toBeTruthy()
                }
            });
        })
    })
})