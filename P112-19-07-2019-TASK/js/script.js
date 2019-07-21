"use strict";

let students = [];
let liItems = "";
let inputs = document.getElementsByClassName("student-input");

function Student(firstName, lastName, email, phone, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.age = age;
    function Info() {
        return this.firstName + " " + this.lastName + " " + this.email + " " + this.age;
    }
}

/* Get input values */
function getInputValues() {

    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value) {
        if( isNaN(inputs[4].value) ){
            alert(inputs[4].value + "is not a number");
         } else{
            let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
    
            students.push(student);
        
            students.forEach(generateLiItems);
                
        
            document.getElementsByClassName("student-list")[0].innerHTML = liItems;
            liItems = "";
            inputs[0].value = "";
            inputs[1].value = "";
            inputs[2].value = "";
            inputs[3].value = "";
            inputs[4].value = "";
         }
   
    }
    else{
        return alert("input cannot be empty");
    }

   
}


function generateLiItems(val, ind, arr) {
  
     liItems += `<li class="list-group-item my-3">${val.firstName} - ${val.lastName} - ${val.email} - ${val.age}</li>`;   
    
}


function reset(){
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
}

// Sort list









