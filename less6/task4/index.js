const numbers = [11, 22, 33, 44, 55];
function swap(arr) {
    const[start, ...rest] = arr;
    return [...rest, start]
}
console.log(swap(numbers));