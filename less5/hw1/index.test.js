import {getSum} from './index.js'

it ('should get sum of numbers', () => {
    const result = getSum(4, 6);
    expect(result).toEqual(10);
});

it ('should get null', () => {
    const result = getSum (-3, 3);
    expect(result).toEqual(0);
})

it ('should get null', () => {
    const result = getSum (-1, 0);
    expect(result).toEqual(0);
})