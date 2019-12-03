import { createLogger } from './index.js/'

it('should return an array', () => {
    const logger = createLogger();
    const result = logger.getRecords();
    expect(result).toEqual([]);
});


it('should get empty array', () => {
    const logger = createLogger();
    logger.error('errorText');
    logger.log('logText');
    const result = logger.getRecords('warn');
    expect(result).toEqual([]);
})

it('should get empty array', () => {
    const logger = createLogger();
    logger.error('errorText');
    logger.warn('warningText');
    const result = logger.getRecords('log');
    expect(result).toEqual([]);
})

it('should get empty array', () => {
    const logger = createLogger();
    logger.log('logText');
    logger.warn('warningText');
    const result = logger.getRecords('error');
    expect(result).toEqual([]);
})
