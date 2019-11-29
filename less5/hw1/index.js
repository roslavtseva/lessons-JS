export function getSum (firstNum, secondNum){
   let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return(result);
}

