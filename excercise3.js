function isPalindrome(str){
    str = str.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("A man a plan a canal Panama")); 
console.log(isPalindrome("race car")); 
console.log(isPalindrome("Was it a cat I saw?")); 