// Enter your code here
console.log('Enter your code here');

const url = 'https://swapi.dev/api/people/';

//fetch the api
let fetchData = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    let output = document.querySelector("#results");

    //loop through results
    for (var i=0; i < data.results.length; i++) { 
        //output name and birthyear
        var input = data.results[i].name + ' - ' + data.results[i].birth_year;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        output.appendChild(li);
    }
};

fetchData(url);

