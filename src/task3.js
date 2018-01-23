var run = function (trianglesArray) {
    let count = 0;
    for (let i = 0; i < trianglesArray.length; i++) {
        if (isTriangle()) {
            count++;
        }
    }
    if (count === trianglesArray.length) {
        triangleSort(trianglesArray);
    } else {
        alert('Input correct triangles!');
    }
};

let triangleSort = function (trianglesArray) {
    let result = [];



    for (let i = 0; i < trianglesArray.length - 1; i++) {
        for (let j = 0; j < trianglesArray.length - 1 - i; j++) {
            try {
                if (ploshad(trianglesArray[j + 1].a, trianglesArray[j + 1].b, trianglesArray[j + 1].c)
                    > ploshad(trianglesArray[j].a, trianglesArray[j].b, trianglesArray[j].c)) {
                    let temp = trianglesArray[j + 1];
                    trianglesArray[j + 1] = trianglesArray[j];
                    trianglesArray[j] = temp;
                }
            } catch (e) {
                alert(e.message());
            }

        }
    }
    for (let i = 0; i < trianglesArray.length; i++) {
        result.push(trianglesArray[i].vertices + ': ' + ploshad(trianglesArray[i].a,
            trianglesArray[i].b,
            trianglesArray[i].c));
    }
    return result;
};

let perimeter = function (a, b, c) {
    return (a + b + c) / 2;
};

let ploshad = function (a, b, c) {
    let p = perimeter(a, b, c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};

let isTriangle = function (triangle) {
  if (triangle.a + triangle.b > triangle.c) {
      return true;
  } else if (triangle.a + triangle.c > triangle.b) {
      return true;
  } else if (triangle.c + triangle.b > triangle.a) {
      return true;
  } else {
      return false;
  }
};