let parseNumberToArray = function (ticket) {
    return ticket.toString().split('').map(function (i) {
        return +i;
    });
};

let moscowType = function (ticket) {
    let arr = parseNumberToArray(ticket);
    return arr.slice(0, 3).reduce(function (a, b) {
        return a + b
    }) === arr.slice(3, 6).reduce((a, b) => a + b);
};


let peterType = function (ticket) {
    let arr = parseNumberToArray(ticket);
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd += arr[i];
        } else {
            even += arr[i];
        }
    }
    return odd === even;
};

var startTickets = function (min, max) {

    let result = {
        moscow: 0,
        peter: 0
    };

    for (let i = min; i <= max; i++) {
        if (moscowType(i)) {
            result.moscow += 1;
        }

        if (peterType(i)) {
            result.peter += 1;
        }
    }
    return 'Moscow(simple) tickets: ' + result.moscow + '; Peter(hard) tickets: ' + result.peter;
};