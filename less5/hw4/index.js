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

/*function compareSums(a, b, c, d) {

    if ((a + b) > (c + d)){
        console.log(true);
    } else {
        console.log (false);
    }
    return sum(a, b, c, d);
}
function sum (from, to){
    let x = 0;
    for (x = from; x <= to; x++){
        result += x;
    }
    return result;
}*/