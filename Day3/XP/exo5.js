const container = document.getElementById("container");
console.log(container);
const firstUl = document.querySelectorAll("ul.list")[0];
const secondUl = document.querySelectorAll("ul.list")[1];
firstUl.children[1].textContent = "Richard";
secondUl.removeChild(secondUl.children[1]);
document.querySelectorAll("ul.list").forEach(ul => {
  ul.firstElementChild.textContent = "Assia";
  ul.classList.add("student_list");
});
firstUl.classList.add("university", "attendance");
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";
secondUl.querySelectorAll("li").forEach(li => {
  if (li.textContent.trim().toLowerCase() === "dan") {
    li.style.display = "none";
  }
});
firstUl.querySelectorAll("li").forEach(li => {
  if (li.textContent.trim().toLowerCase() === "richard") {
    li.style.border = "1px solid black";
  }
});
document.body.style.fontSize = "18px";
if (container.style.backgroundColor === "lightblue") {
  const users = firstUl.querySelectorAll("li");
  if (users.length >= 2) {
    alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
  }
}

