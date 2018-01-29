let isEnvelopeFeet = function (envelope1, envelope2) {
    let result = '';
    if (validateNumbers(envelope1.w) && validateNumbers(envelope1.h)
        && validateNumbers(envelope2.w) && validateNumbers(envelope2.h)) {
        if (envelope1.w > envelope2.w && envelope1.h > envelope2.h) {
            result = '2 поместиться в 1';

        } else if (envelope1.w < envelope2.w && envelope1.h < envelope2.h) {
            result = '1 поместиться в 2';

        } else {
            result = '0';
        }
    }
    return result;
};