// let start = "";
// let end = "";
//
// let moscowLucky = 0;
// let peterLucky = 0;
//
// function moscow(v) {
//     let a = 0;
//     let b = 0;
//     a += v.toString()[0];
//     a += v.toString()[1];
//     a += v.toString()[2];
//
//     b += v.toString()[3];
//     b += v.toString()[4];
//     b += v.toString()[5];
//
//     return (a === b);
// }
//
// function peter(v) {
//     let a = 0;
//     let b = 0;
//     a += v.toString()[0];
//     a += v.toString()[2];
//     a += v.toString()[4];
//
//     b += v.toString()[1];
//     b += v.toString()[3];
//     b += v.toString()[5];
//
//     return (a === b);
// }
//
// function run() {
//     start = prompt('start');
//     end = prompt('end');
//
//     // if (start < 100000 || end < 100000 || start >= end) {
//     //     alert("Указаные числа должны быть больше 1 000 000.");
//     //     return;
//     // }
//
//     let max = parseInt(end);
//
//     for (let i = start; i <= max;i++) {
//         if (moscow(i)) {
//             console.log("Билет №"+i+" счастливый (Москва)");
//             moscowLucky++;
//         }
//         if (peter(i)) {
//             console.log("Билет №"+i+" счастливый (Питер)");
//             peterLucky++;
//         }
//     }
//     alert("Московских счастливых билетов : "+moscowLucky+", Питерских - "+peterLucky);
// }
function run() {

    let start = prompt('start');
    let end = prompt('end');

    let arrStart = [];
    let arrEnd = [];

    arrStart = parseToTicket(start);
    arrEnd = parseToTicket(end);

    function parseToTicket(str) {
        let arr = [];
        for (let i = 0; i < 6 - str.split('').length; i++) {
            arr.push(0);
        }

        for (let i = 0; i < str.split('').length; i++) {
            arr.push(str.split('')[i]);
        }
        return arr;
    }

    function peter(arr) {
        let a = 0;
        let b = 0;
        a += arr[0];
        a += arr[2];
        a += arr[4];

        b += arr[1];
        b += arr[3];
        b += arr[5];

        return (a == b);
    }

    function moscow(arr) {
        let a = 0;
        let b = 0;

        a += arr[0];
        a += arr[1];
        a += arr[2];

        b += arr[3];
        b += arr[4];
        b += arr[5];

        return (a == b);
    }

    let max = 0;
    alert(arrStart.toString().replace(/,/, ''));
}
