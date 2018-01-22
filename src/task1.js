let chess = function (width, height, symbol) {


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if ((j + i) % 2 === 0) {
                document.write(symbol);
            } else {
                document.write('&nbsp');
            }
        }
        document.write('<br/>');
    }
    return str;
};