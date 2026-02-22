const myLibrary = [];
const cardContainer = document.getElementById("cards-container");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary.at(i));
        var div = document.createElement("div");
        div.innerHTML = myLibrary.at(i).title;
        div.classList.add("book-card");
        cardContainer.appendChild(div);
    }
}

addBookToLibrary("Skulduggery Pleasant", "Derek Landy", 384);
addBookToLibrary("Norwegian Wood", "Haruki Murakamai", 390);
addBookToLibrary("Just Kids", "Patti Smith", 320);

