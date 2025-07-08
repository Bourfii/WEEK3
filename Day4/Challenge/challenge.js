let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let span = document.getElementById("story");
let shuffule = document.getElementById("shuffle-button");
let currentValues = {};
button.addEventListener("click" , (event)=>{
    event.preventDefault();
    for(let i = 0; i< inputs.length ; i++){
        if(inputs[i].value ===""){
            alert("Please fill in all the fields!");
            return;
           }
       }
   currentValues = {
        noun : inputs[0].value,
        adjective : inputs[1].value,
        person : inputs[2].value,
        verb : inputs[3].value,
        place : inputs[4].value
   };
let story = `The ${noun} is flying in ${place} but ${person} comes and ${verb} , It was ${adjective}.`;

span.textContent = story;
console.log(story);
});
let templates = [
  `The ${noun} is flying in ${place}, but ${person} comes and ${verb}. It was ${adjective}.`,
  `${person} saw a ${adjective} ${noun} while they were trying to ${verb} in ${place}.`,
  `In ${place}, a ${adjective} ${noun} wanted to ${verb} with ${person}.`,
  `Once upon a time, ${person} and a ${adjective} ${noun} decided to ${verb} in ${place}.`
];
shuffule.addEventListener("click" , ()=>{
    let randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    let story = randomTemplate
        .replace("${\"noun\"}", currentValues.noun)
        .replace("${\"adjective\"}", currentValues.adjective)
        .replace("${\"person\"}", currentValues.person)
        .replace("${\"verb\"}", currentValues.verb)
        .replace("${\"place\"}", currentValues.place);
    span.textContent = story;
    span.style.color = pink;
});
