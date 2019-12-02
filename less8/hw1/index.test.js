import {pickProps} from './index.js'

it ('should return only specified properties', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
})

it('should return only specified properties', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, ['l', 'm']);
    expect(result).toEqual({});
});


it('should return only specified properties', () => {
    const result = pickProps({}, ['a', 'c']);
    expect(result).toEqual({});
});

it('should return only specified properties', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, []);
    expect(result).toEqual({});
});