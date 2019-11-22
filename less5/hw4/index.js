/*function compareSums(a, b, c, d) {
    if (sum(a + b) > sum(c + d)){
        return true;
    } else {
        return false;
    }
}

function sum (from, to){
    let i = 0;
    for (i = from; i <= to; i++){
        result += i;
    }
    return result;
}*/

function compareSums(a, b, c, d) {

    if ((a + b) > (c + d)){
        console.log(true);
    } else {
        console.log (false);
    }
    return sum(a, b, c, d);
}
function sum (from, to){
    let i = 0;
    for (i = from; i <= to; i++){
        result += i;
    }
    return result;
}