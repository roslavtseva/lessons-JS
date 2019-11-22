let n = 10;

getPrimes:
for (let i = 2; i <= n; i++) { // Для всiх i...

  for (let h = 2; h < i; h++) { // провірити чи ділиться число
    if (i % h == 0) continue getPrimes; // якщо не підходить берем наступне
  }

  console.log( i ); // просте число
}