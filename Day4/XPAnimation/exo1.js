//Parte I:
let button = document.getElementById("clear");
setTimeout(()=>{
    alert("hello World");
},2000)
//Parte 2:
let div = document.getElementById("container");
setTimeout(()=>{
   let p = document.createElement("p");
   p.textContent = "Hello World";
    div.appendChild(p);
},2000)
//parte 3:
let clear = setInterval(() => {
    let p = document.createElement("p");
    p.textContent = "Hello World";
    div.appendChild(p);
    }, 2000);
button.addEventListener("click" , ()=>{
    clearInterval(clear);
})