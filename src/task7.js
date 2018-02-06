function findIntervalFib(min, max) {
    let array = [0, 1];
    if (isInteger(min) && validateNumbers(min)) {
        if (isNaN(max)) {
            array = lengthSequence(min);
        } else if (isInteger(max)) {
            array = [];
            /*for (let i = 1, sum = 2; sum <= max; sum += i, i = sum - i) {
                if (sum >= min) {
                    array.push(sum);
                }
            }*/
            for (let i = 0; i < max; i++) {

                if (fibbonachi(i) > min) {
                    if (fibbonachi(i) <= max) {
                        array.push(fibbonachi(i));
                    } else {
                        break;
                    }
                }
            }
        }
    }
    return array;
}

function fibbonachi(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


let lengthSequence = function (l) {
    let min = '1';
    let max = '1';
    for (let i = 0; i < l - 1; i++) {
        min += '0';
        max += '0';
    }
    max += '0';

    return findIntervalFib(parseInt(min), parseInt(max));
};