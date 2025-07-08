let form = document.querySelector("form");
let Vinput = form.elements.volume;
let Rinput = form.elements.radius;
let submit = document.getElementById("submit");
form.addEventListener("click" , (event)=>{
    event.preventDefault();
    if(!isNaN(Rinput.value) && Rinput.value !== ""){
        let volume = (4 / 3) * Math.PI * (Rinput.value ** 3);
        Vinput.value = volume;
    }else{
        Vinput.value = "Erreur!";
    }  
})