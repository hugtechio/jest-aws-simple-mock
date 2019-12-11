import * as target from '../index'

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
    })
})