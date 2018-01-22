let isEnvelopeFeet = function (envelope1, envelope2) {
    let result = '';
    if (typeof envelope1.width !== 'number' || typeof envelope1.height !== 'number'
        || typeof envelope2.width !== 'number' || typeof envelope2.height !== 'number') {
        alert('Input numbers, please!');
    } else if (envelope1.width <= 0 || envelope1.height <= 0
        || envelope2.width <= 0 || envelope2.height <= 0) {
        alert('Input positive numbers, please!');
    } else {
        if (envelope1.width > envelope2.width && envelope1.height > envelope2.height) {
            result = '2 поместиться в 1';
        } else if (envelope1.width < envelope2.width && envelope1.height < envelope2.height) {
            result = '1 поместиться в 2';
        } else {
            result = '0';
        }
    }
    return result;
};