let validateNumbers = function (num) {
    if (num < 0) {
        alert('Input correct value!');
    } else if (typeof num !== 'number') {
        alert('Input correct value!');
    } else if (isNaN(num)) {
        alert('Input correct value!');
    } else {
        return true;
    }
};

let isInteger = function(num) {
  return (num ^ 0) === num;
};