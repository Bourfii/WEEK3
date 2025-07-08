let allBoldItems;
function getBoldItems(){
    allBoldItems = document.querySelectorAll("strong"); 
}
function highlight(){
    allBoldItems.forEach(strong => {
        strong.style.color = "blue";
    }); 
}
function returnItemsToDefault(){
    allBoldItems.forEach(strong => {strong.style.color = "black";})
}
getBoldItems();
let p = document.querySelector("p");
p.addEventListener( "mouseover" , highlight);
p.addEventListener("mouseout" , returnItemsToDefault);
