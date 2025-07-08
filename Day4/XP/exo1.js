const article = document.querySelector("article");
const h1 = article.firstElementChild;
console.log(h1);
const p = article.lastElementChild;
article.removeChild(p);
let h2 = h1.nextElementSibling;
h2.addEventListener("click" , function() {
    this.style.backgroundColor = "red";
})
let h3 = document.getElementsByTagName("h3");
h3.addEventListener("click" , () =>{
    h3.style.display = "none";
})
let button = document.getElementById("click");
button.addEventListener("click" , ()=>{
    const para = document.querySelectorAll("p");
    para.forEach(p => { 
        p.style.fontWeight = "bold";
    })
})
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = randomSize + "px";
});
const paragraphs = document.querySelectorAll("P");
const secondparagraph = paragraphs[1];
secondparagraph.addEventListener("mouseover" , ()=> {
    secondparagraph.classList.add("fade-out");
})