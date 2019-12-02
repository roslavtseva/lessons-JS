import {squareArray} from './index.js';

it ('should return null if its not array', () => {
   const result = squareArray(10);
   expect(result).toEqual(null); 
});

it ('should return square elements correctly', () => {
   const result = squareArray([5, 2]);
   expect(result).toEqual([25, 4]); 
});
it ('should return square elements correctly', () => {
   const result = squareArray([0, 0]);
   expect(result).toEqual([0, 0]); 
});

