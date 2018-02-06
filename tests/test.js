describe("envelopes Task 2", function () {

    it("First feet second", function () {
        assert.isTrue(firstFeetSecond({w: 5, h: 3}, {w: 12, h: 4}));
    });
    it("Second feet first", function () {
        assert.isTrue(secondFeetFirst({w: 10, h: 5}, {w: 8, h: 4}));
    });
    it("Same envelopes", function () {
        assert.equal(secondFeetFirst({w: 5, h: 5}, {w: 5, h: 5}), 0);
    });

});

describe("triangles Task 3", function () {
    let triangle = new Triangle('ABC', 4, 2, 4);

    it('Find perimeter', function () {
        assert.equal(triangle.getPerimeter(), 5);
    });

    it('Find area', function () {
        assert.equal(triangle.getArea(), 3.87);
    });
    it('Check triangle', function () {
        assert.isTrue(triangle.isTriangle());
        assert.isFalse(new Triangle('falseTr', 1, 2, 3).isTriangle())
    });

});

describe("Palindrome Task 4", function () {

    it('Check string as palindrome', function () {
        assert.equal(findTheLongest('atdsoftservevrestfosrgtr'), 'softservevrestfos');
    });
    it('Check number as palindrome', function () {
        assert.equal(findTheLongest('6537122322188784'), '1223221');
    });
    it('Is the word palindrome function', function () {
        assert.isTrue(isThisPalindrome('abba'));
        assert.isFalse(isThisPalindrome('abcd'));
    });

});

describe("Tickets Task 5", function () {
    it('Testing moscow(light) type', function () {
        assert.isTrue(moscowType(321222));
        assert.isFalse(moscowType(784392));
    });
    it('Testing peter(hard) type', function () {
        assert.isTrue(peterType(100012));
        assert.isFalse(peterType(784392));
    });
    it('Testing parseNumberToArray function', function () {
        expect(parseNumberToArray(123456)).to.be.an('array');
        assert.deepEqual(parseNumberToArray(123456), [1, 2, 3, 4, 5, 6]);
    });
});

describe("Sequence Task 6", function () {
    it('Testing "getFirstNum" function', function () {
        assert.equal(getFirstNum(10), 4);
    });
    it('Testing "whole task"', function () {
        expect(createSequence(3, 10)).to.be.an('array');
        assert.deepEqual(createSequence(3, 10), [4, 5, 6]);
    });
});

describe("Fibbonachi Task 7", function () {
    it('Testing of generating fibbonach number', function () {
        assert.equal(fibbonachi(5), 5);
    });
    it("Testing sequence of numbers with the same length", function () {
        expect(lengthSequence(2)).to.be.an('array');
        assert.deepEqual(lengthSequence(1), [2, 3, 5, 8]);
    });
});