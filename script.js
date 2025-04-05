const inputElement = document.querySelector('.js-input');
const checkButton = document.querySelector('.js-check-btn');
const resultContainer = document.querySelector('.js-result');

resultContainer.style.display = 'none';

function isPalindrome(str) {
    const formatStr = str.toLowerCase().replace(/[^\w]|_/g, "");
    if(!formatStr) {
        alert('Please input a value');
        return -1;
    }
    const reverseStr = formatStr.split("").reverse().join("");
    if(formatStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

checkButton.addEventListener('click', () => {
    const inputString = inputElement.value;
    if(isPalindrome(inputString) === -1) {
        resultContainer.style.display = 'none';
    } else {
    resultContainer.style.display = 'block';
    if(isPalindrome(inputString)) {
        resultContainer.innerText = `${inputString} is a palindrome`;
    } else {
        resultContainer.innerText = `${inputString} is not a palindrome`;
    }
    }
});