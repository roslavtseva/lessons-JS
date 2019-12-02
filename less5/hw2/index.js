
export const getPrimes = (number) => {
  if (number < 0 || !Number.isInteger(number)) {
      return null;
  }
  for (let i = 1; i <= number; i++) {
      if (isPrime(i)) {
          return i;
      }
  }
};

function isPrime(number) {
  let count = 2;
  while (count < number) {
      if (number % count === 0) {
          return false;
      }
      count++;
  }
  return true;
}
//getPrimes(50);


/**Создайте ф-цию, которая ищет все простые числа от 1 до n. Число является простым, если оно делиться без остатка только на 1 и само на себя

Основные требования:
Имя ф-ции должно быть getPrimes
Функция должна принимать целое положительное число
Функция должна выводить в консоль все простые числа от 1 до заданного числа */