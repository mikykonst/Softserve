let createSequence = function (n, m) {
    if (isInteger(n)) {
        let num = Math.ceil(Math.sqrt(m));
        let arr = [];

        for (let i = 0; i < n; i++) {
            arr.push(num);
            num++;
        }
        return arr;
    } else {
        alert('Input only integer values!');
    }
};