// Enter your code here
console.log('Enter your code here');

//on form submission
document.querySelector('.mx-auto').addEventListener('submit', handleSubmit);

//check if input is palindrome
function isPalindrome(string) {

    var len = string.length;
    
    for (var i = 0; i < len/2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false; 
        }
    }

    return true; 
};

//handle the results
function handleSubmit(event) {
    var input = document.getElementById("number").value;
    var output = document.querySelector("#result");

    if(isPalindrome(input) == true) {
        output.innerHTML = "<span style='color: green'> Yes. This is a palindrome!</span>";
        event.preventDefault();
    }
    else {
        output.innerHTML = "<span style='color: red'>No. Try again</span>";
        event.preventDefault();
    }

};