// Enter your code here
console.log('Enter your code here');

document.querySelector('.btn-info').addEventListener('click', handleClick); 

//replace punctuations with breaks
let highlight = input => {
    input = input.replaceAll(/[.,\/#!$%\^&\*;:{}=\-—_`~()]/g, '</br>' );
    
    return input;
};

//case when user clicked "find" button
function handleClick() {
    var text = document.getElementById("userinput");
    var output = document.querySelector("#results");

    output.innerHTML = highlight(text.innerHTML);

};