class Triangle {
    constructor(name, fSide, sSide, thSide) {
        this.name = name;
        this.fSide = parseFloat(fSide);
        this.sSide = parseFloat(sSide);
        this.thSide = parseFloat(thSide);
    }

    getPerimeter() {
        return (this.fSide + this.sSide + this.thSide) / 2;
    }

    getArea() {
        let p = this.getPerimeter();
        return (Math.sqrt(p * (p - this.fSide) * (p - this.sSide) * (p - this.thSide))).toFixed(2);
    }
    isTriangle() {
        return (this.fSide + this.sSide > this.thSide && this.fSide + this.thSide > this.sSide && this.thSide + this.sSide > this.fSide);
    }

    get getName() {
        return this.name;
    }

    get getFirstSide() {
        return this.fSide;
    }
    get getSecondSide() {
        return this.sSide;
    }
    get getThirdSide() {
        return this.thSide;
    }

    set setName(name) {
        this.name = name;
    }

    set setFirstSide(fSide) {
        this.fSide = fSide;
    }
    set setSecondSide(sSide) {
        this.sSide = sSide;
    }
    set setThirdSide(thSide) {
        this.thSide = thSide;
    }
}

let runTriangles = function (trianglesArray) {
    let count = 0;
    let result = [];
    for (let i = 0; i < trianglesArray.length; i++) {
        if (trianglesArray[i].isTriangle()) {
            count++;
        }
    }
    if (count === trianglesArray.length) {
        result = triangleSort(trianglesArray);
    } else {
        alert('Input correct triangles!');
    }
    return result;
};

function compareTriangles(T1, T2) {
    return T1.getArea() - T2.getArea();
}

let triangleSort = function (trianglesArray) {

    let res = [];
    /*for (let i = 0; i < trianglesArray.length - 1; i++) {
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
    }*/
    trianglesArray.sort(compareTriangles);
    for (let i = 0; i < trianglesArray.length; i++) {
        res.push(trianglesArray[i].getName);
    }
    return res.reverse();
};