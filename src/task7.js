function findIntervalFib(min, max) {

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
        } else {
            array = [];
            for (let i = 1, sum = 2; sum <= max; sum += i, i = sum - i)
                if (sum >= min)
                    array.push(sum);
        }
    }
    return array;
}