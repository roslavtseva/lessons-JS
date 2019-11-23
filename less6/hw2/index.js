if (!Array.isArray(arr)) {
    return null;
}
const x = [];
for (let i of arr) {
    x.slice(i).reverse(i);
}
const x = arr.slice().reverse();
return x;
}
