let createSequence = function (n, m) {
    let num = Math.floor(Math.sqrt(m)) + 1;
    let arr = [];
    for (let i = num; i < num + n; i++) {
        arr.push(i);
    }
    return arr;
};