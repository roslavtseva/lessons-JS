export const calc = expression => {

    if (typeof expression !== 'string') return null;

    const [a, operator, b] = expression.split(' ');     

    let result;

    a = +a;
    b = +b;
   

    switch (operator) {    
        case '+':      
            result = +a + +b; 
            break;
        case '-':
            result = a - b; 
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return `${expression} = ${result}`
};
//console.log(calc('5 * 2'));
