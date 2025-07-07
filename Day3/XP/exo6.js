const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);

const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

const first = ul.firstElementChild;
const last = ul.lastElementChild;

console.log("First link:", first.textContent);
console.log("Last link:", last.textContent);
