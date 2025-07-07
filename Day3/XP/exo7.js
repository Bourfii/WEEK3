const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) text.style.color = "red";
  
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(text);
  div.appendChild(img);
  section.appendChild(div);
});
