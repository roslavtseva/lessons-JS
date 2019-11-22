function compareSums(a, b, c, d) {
    if (sum(a + b) > sum(c + d)){
        console.log (true);
    } else {
        console.log (false);
    }
}

function sum (from, to){
    let x = 0;
    for (x = from; x <= to; x++){
        result += x;
    }

    return result;
}

