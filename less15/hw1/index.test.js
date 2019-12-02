import {createCalculator} from './index.js'


it('should get result correctly', () =>  {
    const calc = createCalculator();
    calc.add(13);
    let result = calc.getMemo();

    expect(result).toEqual(13);
});

it('should get result correctly', () =>  {
    const calc = createCalculator();
    calc.decrease(13);
    let result = calc.getMemo();

    expect(result).toEqual(-13);
});

it('should get result correctly', () =>  {
    const calc = createCalculator();
    calc.reset();
    let result = calc.getMemo();

    expect(result).toEqual(0);
});

it('should get result correctly', () =>  {
    const calc = createCalculator();

    let result = calc.getMemo();

    expect(result).toEqual(0);
});
