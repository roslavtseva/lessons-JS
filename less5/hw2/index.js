let n = 10;
getPrimes:
for (let i = 1; i <= n; i++) { 
  for (let h = 2; h < i; h++) { 
    if (i % h == 0) continue getPrimes; 
  }
  console.log(i); 
}