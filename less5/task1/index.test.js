import {sum} from './index.js'

/*it ('shoud keep two arguments', () => {
        const result = sum(a, b);
        expect(result).toEqual(a, b)
});*/

it ('shoud get sum of numbers', () => {
    const result = sum(a + b);
    expect(result).toEqual(a + b)
});
