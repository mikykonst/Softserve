let validateNumbers = function (num) {
    if (num < 0) {
        alert('Input correct value!');
    } else if (typeof num !== 'number') {
        alert('Input correct value!');
    } else if (num.toString() === 'NaN') {
        alert('Input correct value!');
    }
};