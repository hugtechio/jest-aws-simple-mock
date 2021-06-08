import { MockFunctionReturnSpy } from './base'

export interface Spies {
    [name: string]: jest.SpyInstance;
}
/**
 * MockChain provides chaining mocks functionalities
 * @example         
    // construct mock chain
    const chain = new MockChain()
    chain
        .add(V3.mockDynamo.send, 1) <-- stack this mock behavior to spies[0]
        .add(V3.mockLambda.send, {}) <-- stack this mock behavior to spies[1]
        .add(V3.mockDynamo.send, 2, 0) <-- add this mock behavior to spies[0]
            (The Send method of DynamoDB will be called twice in the test target)
    const spies = chain.getSpies()

    // checking spies
    expect(spies[0]).toHaveBeenNthCalledWith(1, xxxxx) <-- check parameter for first dynamoDB call
    expect(spies[1]).toHaveBeenCalledWith(yyyyy) <-- check parameter for first lambda call
    expect(spies[0]).toHaveBeenNthCalledWith(2, zzzzz) <-- check second parameter for second dynamoDB call
 */
export class MockChain {
    private spies: jest.SpyInstance[] = []
    private namedSpies: Spies = {}

    /**
     * @returns Array of {jest.SpyInstance}
     */
    getSpies() {
        return this.spies
    }

    /**
     * @returns {Spies}
     */
    getNamedSpies() {
        return this.namedSpies
    }

    /**
     * Adding a behavior to mock chain and stack spyInstances
     * @param func target mock function of AWS-SDK
     * @param result mock will return this value
     * @param targetSpyIndex adding mock behavior to existing spies
     *  example: when you want to mock dynamodb GetItem command twice, you will chain behavior by target spy 
     *      const chain = new MockChain()
            chain
                .add(V3.mockDynamo.getItem, 1) <-- for the first call 
                .add(V3.mockDynamo.getItem, 2, 0) <-- for the second call
        * @returns {MockChain}
        */
    public add(func: MockFunctionReturnSpy, result: any, targetSpyIndex?: number): MockChain {
        let mock: jest.SpyInstance
        if (targetSpyIndex) {
            if (targetSpyIndex >= 0 && targetSpyIndex <= this.spies.length - 1) {
                mock = this.spies[targetSpyIndex]
            } else {
                throw new Error('Index Out of range')
            }
            this.spies[targetSpyIndex] = func(result, mock)
        } else {
            this.spies.push(func(result))
        }
        return this
    }

    /**
     * Add a mock with name
     * chain the mock to which is indexed with name
     * @param name index of spy. If the name exists in the spies stack, the mock object is chained to the existing key.
     * @param func target mock function of AWS-SDK
     * @param result mock will return this value
     *  example: when you want to mock dynamodb GetItem command twice, you will chain behavior by target spy 
     *      const chain = new MockChain()
        chain
            .add('getItem', V3.mockDynamo.getItem, 1) <-- for the first call 
            .add('getItem', V3.mockDynamo.getItem, 2) <-- for the second call
        * @returns {MockChain}
        */
    public addWithName(name: string, func: MockFunctionReturnSpy, result: any, targetSpyIndex?: number): MockChain {
        let mock: jest.SpyInstance
        if (Object.keys(this.namedSpies).indexOf(name) < 0) {
            this.namedSpies[name] = func(result)
        } else {
            this.namedSpies[name] = func(result, this.namedSpies[name])
        }
        return this
    }
                
}