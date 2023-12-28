
function reverseWords(sentence) {

    const words = sentence.split(' ');


    const reversedWords = words.map(word => reverseString(word));


    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


function reverseString(str) {

    return str.split('').reverse().join('');
}


const inputSentence = "This is a sunny day";
const reversedResult = reverseWords(inputSentence);
console.log("Reversed Words: " + reversedResult);


const numberArray = [5, 2, 9, 1, 5, 6];
const sortedDescending = numberArray.sort((a, b) => b - a);
console.log("Sorted in Descending Order: " + sortedDescending);
