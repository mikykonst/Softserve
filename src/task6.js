let createSequence = function (n, m) {
    if (isInteger(n)) {
        let num = getFirstNum(m);
        let arr = [];

        for (let i = m; i < m+n; i++) {
            arr.push(num);
            num++;
        }
        return arr;
    } else {
        alert('Input only integer values!');
    }
};

let getFirstNum = (m) => (Math.ceil(Math.sqrt(m)));