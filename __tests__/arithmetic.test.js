import {isEven, sum} from '../arithmetic.js'


//test takes 2 things: a string and a callback. Inside callback you can have
//one or more expect
//describe is grouping the two tests because they both use the same function
//dont have to but if you have one describe its nice to make the other test in a describe as well
describe('test that sum works for ', () => {
    test('positive numbers', () => {
        expect(sum(5,9)).toBe(14)
        expect(sum(1,1)).toBe(2)
        expect(sum(7,1000)).toBe(1007)

    })

    test('negativie numbers', () => {
        expect(sum(-1,0)).toBe(-1)
        expect(sum(-30,-1000)).toBe(-1030)
        expect(sum(-4,-7)).toBe(-11)
        expect(sum(9,-3)).toBe(6)
    })

})    

describe('test that isEven works for ', () => {
    test('positive integers', () => {
        expect(isEven(5)).toBe(false)
        expect(isEven(10)).toBe(true)
        expect(isEven(3)).toBe(false)
        expect(isEven(6)).toBe(true)

    })
})