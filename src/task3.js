let triangleSort = function (trianglesArray) {
    let arr = [];
    for (var i = 0; i < trianglesArray.length - 1; i++) {
        for (var j = 0; j < trianglesArray.length - 1 - i; j++) {
            if (ploshad(trianglesArray[j + 1].a, trianglesArray[j + 1].b, trianglesArray[j + 1].c)
                > ploshad(trianglesArray[j].a, trianglesArray[j].b, trianglesArray[j].c)) {
                let temp = trianglesArray[j + 1];
                trianglesArray[j + 1] = trianglesArray[j];
                trianglesArray[j] = temp;
            }
        }
    }
    for (let i = 0; i < trianglesArray.length; i++) {
        console.log(trianglesArray[i].vertices + ': ' + ploshad(trianglesArray[i].a,
            trianglesArray[i].b,
            trianglesArray[i].c));
    }
};

let perimetr = function (a, b, c) {
    return (a + b + c) / 2;
};

let ploshad = function (a, b, c) {
    let p = perimetr(a, b, c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};

var sortElements = function (A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (A[j + 1] < A[j]) {
                var t = A[j + 1];
                A[j + 1] = A[j];
                A[j] = t;
            }
        }
    }
    return A;    // На выходе сортированный по возрастанию массив A.
}