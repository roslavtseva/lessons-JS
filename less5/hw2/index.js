/*let n = 10;

getPrimes:
for (let i = 1; i <= n; i++) { 

  for (let h = 2; h < i; h++) { 
    if (i % h == 0) continue getPrimes; 
  }

  console.log(i); 
}*/

let n = 10;

function getPrimes(){
for (let i = 1; i <= n; i++) { 
  if (anotherPrimes(i)) console.log(i); 
}
}

function anotherPrimes(){
  for (let h = 2; h < i; h++) { 
    if (i % h == 0) continue getPrimes; 
  }
}

