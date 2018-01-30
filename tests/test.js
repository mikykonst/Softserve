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

    it('Find perimeter', function () {
        assert.equal(perimeter(4, 2, 4), 5);
    });

    it('Find ploshad', function () {
        assert.equal(ploshad(4, 5, 6), 9.921567416492215);
    });
    it('Check triangle', function () {
        assert.isTrue(isTriangle({a: 5, b: 4, c: 3}));
        assert.isFalse(isTriangle({a: 5, b: 9, c: 1}))
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