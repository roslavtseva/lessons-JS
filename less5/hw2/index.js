

function getPrimes(n) {
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

getPrimes(50);

