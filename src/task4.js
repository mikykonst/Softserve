function isThisAPalidrome(word) {
    let reverse = (word + '').split('').reverse().join('');
    return word == reverse
}

function findTheLongest(word) {
    var w = word.toString();
    let longestPalindromeLength = 0;
    let longestPalindrome = '';
    for (let i = 0; i < w.length; i++) {
        let wordMinusOneFromBeginning = w.substr(i, w.length);
        for (let j = wordMinusOneFromBeginning.length; j > 0; j--) {
            let wordMinusOneFromEnding = wordMinusOneFromBeginning.substr(0, j);
            if (wordMinusOneFromEnding <= 0)
                continue;
            if (isThisAPalidrome(wordMinusOneFromEnding)) {
                if (wordMinusOneFromEnding.length > longestPalindromeLength) {
                    longestPalindromeLength = wordMinusOneFromEnding.length;
                    longestPalindrome = wordMinusOneFromEnding;
                }
            }
        }
    }
    return longestPalindrome;
}