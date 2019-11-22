function compareSums(a, b, c, d) {
    if (sum(a + b) > sum(c + d)){
        return (true);
    } else {
        return (false);
    }
}

function sum (from, to){
    let result = 0;
    for (let x = from; x <= to; x++){
        result += x;
    }

    return result;
}

