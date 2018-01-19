class Fibonachi {
    constructor(min, max) {
        this._min = min;
        this._max = max;
    }


    fibonachiInterval() {
        let result = [this.min, this.min],
            val = 0;
        for (let i = this._min; result[i] < this.max; i++) {
            val = result[i] + result[i - 1];
            val <= this.max && result.push(val);
        }
        return result;
    }

    get min() {
        return this._min;
    }

    set min(value) {
        this._min = value;
    }

    get max() {
        return this._max;
    }

    set max(value) {
        this._max = value;
    }
}

