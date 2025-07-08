let pdiv = document.getElementById("container");
let cDiv = document.getElementById("animate");
let position = 0;
let interval;
let button = document.querySelector("button");
button.addEventListener("click" , ()=>{
    clearInterval(interval);
    interval = setInterval(()=>{
        if(position >= pdiv.offsetWidth - cDiv.offsetWidth){
            clearInterval(interval);
        }else{
            position++;
           cDiv.style.left = position + "px";   
        }
    },1)
});
