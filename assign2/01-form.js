// Enter your code here
console.log('Enter your code here');

document.querySelector('#submit').onclick = function () {


    var nameInput = document.getElementById('name'); 
    var emailInput = document.getElementById('email'); 
    var registerInput = document.getElementById('register-select');

    //get section button input
    var sectionInput = document.getElementsByName('section');
    var sectionClicked;

    for (var i = 0; i < 2; i++) { 
        if (sectionInput[i].checked) {
          sectionClicked = sectionInput[i].value;
          break;
        }
    }
    
    //get question 1's checkbox values
    var q1Input = document.getElementsByName('q1');
    var q1First = " "; var q1Second = " "; var q1Third = " ";

    if (q1Input[0].checked) {
        q1First = q1Input[0].value;   
    }
    if (q1Input[1].checked) {
        q1Second = q1Input[1].value;
    }
    if (q1Input[2].checked) {
        q1Third = q1Input[2].value;
    }

    //get question 2's input
    var q2Input = document.getElementById('q2').value;

    //check if any inputs are empty
    if(nameInput.value == "") { alert("A required field is empty! Please fill in all fields."); }
    else if(emailInput.value == "") { alert("A required field is empty! Please fill in all fields."); }
    else if(sectionClicked == null ) { alert("A required field is empty! Please fill in all fields."); }

    else {
        console.log("Name: " + nameInput.value);    
        console.log("Email: " + emailInput.value);    
        console.log("Class Registration: " + registerInput.value);    
        console.log("Class Section: " + sectionClicked);    
        console.log("Courses: " + q1First + ", " + q1Second + ", " + q1Third);    
        console.log("Comments: " + q2Input);    
    }
    
};
