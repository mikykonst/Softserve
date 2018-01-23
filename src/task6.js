let createSequence = function (n, m) {
    // let num = Math.floor(Math.sqrt(m)) + 1;
    // let arr = [];
    // for (let i = num; i < num + n; i++) {
    //     arr.push(i);
    // }
    // return arr;

    let num = Math.ceil(Math.sqrt(m));
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(num);
        num++;
    }
    return arr;
};