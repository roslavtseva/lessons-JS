import {increaser} from './index.js';

it ('if a >  than index should return sum', () => {
    const result = increaser(10, 5);
    expect(result).toEqual(15);
});

it ('if a <  than index should return a', () => {
    const result = increaser(4, 5);
    expect(result).toEqual(4);
});

it ('if a = index should return a', () => {
    const result = increaser(5, 5);
    expect(result).toEqual(5);
});