import { getDiff } from './index.js';

it('should return correct difference when startDate is newest', () => {
    const result = getDiff(new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44)), new Date(Date.UTC(2019, 1, 22, 17, 52, 18)));
    expect(result).toEqual('275d 2h 58m 16s');
});

it('should return correct difference when time is not UTC time', () => {
    const result = getDiff(new Date(1995, 11, 17, 3, 24, 0), new Date(2011, 10, 10, 5, 16, 12));
    expect(result).toEqual('5807d 1h 52m 12s');
});

it('should return correct difference', () => {
    const result = getDiff(new Date(2000, 0, 0, 0, 0, 0), new Date(2000, 0, 0, 0, 0, 1));
    expect(result).toEqual('0d 0h 0m 1s');
});
