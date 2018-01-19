/* Task 1 */
let width = 12;
let height = 4;
let symbol = '*';
chess(width, height, symbol);

/* Task 2 */
let envelope1 = {width: 3.43, height: 2.23};
let envelope2 = {width: 3.43, height: 2.87};
isEnvelopeFeet(envelope1, envelope2);

/* Task 3 */

let treangle1 = {
    vertices: 'ABC',
    a: 5,
    b: 3,
    c: 7
};

let treangle2 = {
    vertices: 'DEF',
    a: 12,
    b: 13,
    c: 5
};

let treangle3 = {
    vertices: 'HLM',
    a: 4,
    b: 5,
    c: 3
};

let array = [];
array.push(treangle1);
array.push(treangle2);
array.push(treangle3);

triangleSort(array);

/* Task 4 */
let num = '1234437';
console.log(findTheLongest(num));

/* Task 6 */
console.log(createSequence(4, 10));

/* Task 7 */
let f = new Fibonachi(0, 100);
alert(f.fibonachiInterval().toString());