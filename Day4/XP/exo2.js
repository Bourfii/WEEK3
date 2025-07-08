const forms  = document.forms;
const form = forms[0];
console.log(form);
const fname = document.getElementById("fname");
console.log(fname);
const lname = document.getElementById("lname");
console.log(lname);
const submit = document.getElementById("submit");
console.log(submit);

const input1 = form.elements.firstname;
const input2 = form.elements.lastname;
console.log(input1);
console.log(input2);

submit.addEventListener("click" , (event)=> {
    alert("the event blocke")
    event.preventDefault();
    console.log(submit.value);
    const inputs = document.querySelectorAll("input[type ='text']");
    for(let i = 0 ; i < inputs.length ; i++){
        if(inputs[i].values == ""){
            alert("The value is not empty")
            return;
        }
    }
})
let ul = document.querySelector("ul");
let li1 = document.createElement("li");
li1.textContent = "first name : "  + input1.value;
    let li2 = document.createElement("li");
    li2.textContent = "last name : " + input2.value;
    ul.appendChild(li1);
    ul.appendChild(li2);





