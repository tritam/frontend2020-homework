// Enter your code here
console.log('Enter your code here');

// Input #1:
// http://www.example.com

// Output
// http://www.example.com

// Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

document.querySelector('.mx-auto').addEventListener('submit', handleClick); 

//I couldn't figure this one out
function handleClick(event) {
    var url = document.getElementById('comments').value;

    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;

    parser.href = url;

    queries = parser.search.replace(/^\?/, '').split('&');
    
    /*let output =  document.querySelector('#output');

    output.innerHTML = userInput.value;*/

    event.preventDefault();
};