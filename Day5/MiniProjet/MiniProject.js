window.addEventListener("DOMContentLoaded", () => {
let selcolor = null;
let button = document.querySelector("button[name='clear']");
let colors = document.querySelectorAll(".color");
let squares = document.querySelectorAll(".square");
let isDrawing = false;
colors.forEach(color => {
    color.addEventListener("click" , ()=>{
        selcolor = color.style.backgroundColor;
        console.log("Couleur sélectionnée :", selcolor);
        colors.forEach(col=>{
            col.style.outline = "none";
        });
        color.style.outline = "2px solid black";
    });
});
document.addEventListener("mousedown" , () => {
    isDrawing = true;
});
document.addEventListener("mouseup" , () => {
    isDrawing = false;
})
squares.forEach(square => {
    square.addEventListener("mouseover" , ()=>{
        if(isDrawing && selcolor){
            square.style.backgroundColor = selcolor;
        }    
    });
});
button.addEventListener("click" , ()=>{
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
  });
});