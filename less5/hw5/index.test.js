import {findDivCount} from './index.js';

it ('shoul return number of digits that are % n', () => {
   const result = findDivCount(10, 20, 2);
   expect(result).toEqual(6); 
});

it ('shoul return number of digits that are % n', () => {
    const result = findDivCount(10, 20, 0);
    expect(result).toEqual(11); 
 });

 it ('shoul return number of digits that are % n', () => {
    const result = findDivCount(10, 20, -5);
    expect(result).toEqual(3); 
 });