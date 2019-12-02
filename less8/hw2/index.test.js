import {getAdults} from './index.js'

it ('should return correct values', () => {
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });  
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
});

it ('should return void object', () => {
    const result = getAdults({});  
    expect(result).toEqual({});
});


it('should get result if no one is adult', () => {
    const result = getAdults({ 'John Doe': 11, 'Tom': 12, 'Bob': 13 });
    
    expect(result).toEqual({});
});