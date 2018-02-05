let chess = function (width, height, symbol) {

    if (validateNumbers(parseInt(width)) && validateNumbers(parseInt(height)) && !isFloat(width) && !isFloat(height)) {
        $('#taskContainer').append('<pre></pre>');
        let container = $('#taskContainer>pre');
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if ((j + i) % 2 === 0) {
                    container.append(symbol);
                } else {
                    container.append(' ');
                }
            }
            container.append('<br/>');
        }
    } else {
        alert('Input correct numbers!');
    }
};