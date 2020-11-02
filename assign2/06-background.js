// Enter your code here
console.log('Enter your code here');

var input; 

//change to start/stop depending on disabled/enabled
document.querySelector('.mx-auto').addEventListener('submit', handleSubmit);

//change background color
let changeBg = () => {
    document.body.style.backgroundColor = "rgba(" + [(Math.floor((Math.random()*255) + 1)), 
        (Math.floor((Math.random()*255) + 1)), 
        (Math.floor((Math.random()*255) + 1)), 
        Math.random()].join(',') + ")";
};

//change button
function changeButton() {
    if(document.querySelector('.btn-danger').value == 'Stop' ) {
        document.getElementById('interval').disabled = false;
        document.querySelector('.btn-danger').value = 'Start';
        document.querySelector('.btn-danger').style.backgroundColor = "blue";
    }
    else {
        document.getElementById('interval').disabled = true;
        document.querySelector('.btn-danger').value = 'Stop';
        document.querySelector('.btn-danger').style.backgroundColor = "red";
    }
}

//handle the submit button
function handleSubmit(event) {
    if(document.querySelector('.btn-danger').value == 'Start' ) {
        var interval = document.getElementById("interval").value * 1000;
        input = setInterval(changeBg, interval);
    }
    else {
        clearInterval(input);
    }
    
    changeButton();
    event.preventDefault();
};
