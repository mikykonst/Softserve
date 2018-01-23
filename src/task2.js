let isEnvelopeFeet = function (envelope1, envelope2) {
        let result = '';

        validateNumbers(envelope1.width);
        validateNumbers(envelope1.height);
        validateNumbers(envelope2.width);
        validateNumbers(envelope2.height);

        if (envelope1.width > envelope2.width && envelope1.height > envelope2.height) {
            result = '2 поместиться в 1';

        } else if (envelope1.width < envelope2.width && envelope1.height < envelope2.height) {
            result = '1 поместиться в 2';

        } else {
            result = '0';
        }
        return result;
    }
;