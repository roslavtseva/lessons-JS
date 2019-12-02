import {compareSums} from './index.js'

it ('should return true if sum(a, b) > sum(c, d)', () => {
    const result = compareSums(5, 5, 2, 2);
    expect(result).toEqual(true);
});

it ('should return false if sum(a, b) < sum(c, d)', () => {
    const result = compareSums(2, 2, 5, 5);
    expect(result).toEqual(false);
});

it ('should return false if sum(a, b) = sum(c, d)', () => {
    const result = compareSums(2, 2, 2, 2);
    expect(result).toEqual(false);
});