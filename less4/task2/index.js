const m = 10;
const n = 20;
let result = 1;
let l = m;
do {
    if (l % 2 === 1){
            result *= l;
    }
    l++;
} while (l <= n);

console.log(result);