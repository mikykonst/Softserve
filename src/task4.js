let longestPalindromeLength = 0;
let longestPalindrome = '';

function isThisAPalidrome(word) {
    let reverse = word.split('').reverse().join('');
    return word == reverse
}

function findTheLongest(word) {
    for (let i = 0; i < word.length; i++) {
        let wordMinusOneFromBeginning = word.substr(i, word.length);
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