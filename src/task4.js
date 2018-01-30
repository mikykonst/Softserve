function isThisPalindrome(word) {
    let reverse = (word + '').split('').reverse().join('');
    return word === reverse
}

function findTheLongest(word) {
    let w = word.toString();
    let palindromeLength = 0;
    let palindrome = '';
    for (let i = 0; i < w.length; i++) {
        let delFromBegin = w.substr(i, w.length);
        for (let j = delFromBegin.length; j > 0; j--) {
            let delFromEnding = delFromBegin.substr(0, j);
            if (delFromEnding <= 0)
                continue;
            if (isThisPalindrome(delFromEnding)) {
                if (delFromEnding.length > palindromeLength) {
                    palindromeLength = delFromEnding.length;
                    palindrome = delFromEnding;
                }
            }
        }
    }
    return palindrome;
}