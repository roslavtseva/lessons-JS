

export function getPrimes(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return null;
}
  for (let i = 1; i <= n; i++) {
      if (isPrime(i)) console.log(i);
  }
}

function isPrime(n) {
  for (let h = 2; h < n; h++) {
      if (n % h === 0) return false;
  }
  return true;
}

//getPrimes(50);

/**Создайте ф-цию, которая ищет все простые числа от 1 до n. Число является простым, если оно делиться без остатка только на 1 и само на себя

Основные требования:
Имя ф-ции должно быть getPrimes
Функция должна принимать целое положительное число
Функция должна выводить в консоль все простые числа от 1 до заданного числа */