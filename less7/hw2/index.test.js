import {reverseArray} from './index.js';

it ('should return null if its not array', () => {
   const result = reverseArray(10);
   expect(result).toEqual(null); 
});

it ('should return reverse array', () => {
    const result = reverseArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]); 
 });

 it ('should return reverse array', () => {
    const result = reverseArray([-1, -2, -3, -4, -5]);
    expect(result).toEqual([-5, -4, -3, -2, -1]); 
 });


