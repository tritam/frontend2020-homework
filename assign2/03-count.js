// Enter your code here
console.log('Enter your code here');

document.querySelector('#find').addEventListener('click', handleClick); 
document.querySelector('#input').addEventListener('keyup', handleKeyup);

//replace matching text with highlighted
let highlight = input => {
    var textInput = document.getElementById('input').value;
    input = input.replaceAll(textInput, '<span style="background-color: yellow;">' + textInput + '</span>');
    
    return input;
};

//case when user clicked "find" button
function handleClick() {
    var text = document.getElementById("intro");
    document.getElementById("intro").innerHTML = highlight(text.innerHTML);
};

//case when user punches enter key
function handleKeyup(event) {
    if(event.code == 'Enter') {
        handleClick();
    }
};