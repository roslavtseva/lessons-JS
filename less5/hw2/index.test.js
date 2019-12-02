import { getPrimes } from './index.js'

it('should get all prime numbers', () => {
    const result = getPrimes(15);
    expect(result).toEqual(1, 2, 3, 5, 7, 11, 13);
});

it ('should get null', () => {
        const result = getPrimes(12,3);
        expect(result).toEqual(null);
});