function findIntervalFib(min, max) {

    if (isInteger(min)) {
        let array = [0, 1];
        let temp;

        if (typeof min !== 'number' && typeof max !== 'number') {
            alert('Input numbers, please!');
        } else {
            if (max == null || max === 0) {
                for (let i = 1; array[i] < min; i++) {
                    temp = array[i] + array[i - 1];
                    temp <= min && array.push(temp);
                }
            } else if (isInteger(max)) {
                array = [];
                for (let i = 1, sum = 2; sum <= max; sum += i, i = sum - i) {
                    if (sum >= min) {
                        array.push(sum);
                    }
                }
            }
        }
    } else {
        alert('Input only integer values!');
    }

    return array;
}

let lengthSequence = function (l) {
    let min = '1';
    let max = '1';
    for (let i = 0; i < l - 1; i++) {
        min += '0';
        max += '0';
    }
    max += '0';

    for (let i = min; i < max; i++) {
        console.log(i);
    }
};