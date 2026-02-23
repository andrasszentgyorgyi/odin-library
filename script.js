const myLibrary = [];
const cardContainer = document.getElementById("cards-container");
const bookTemplate = document.getElementById("book-template");

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
        var card = bookTemplate.content.cloneNode(true);
        var title = card.querySelector(".book-title");
        var author = card.querySelector(".book-author")
        var pages = card.querySelector(".book-pages");
        title.textContent = myLibrary.at(i).title;
        author.textContent = "by: " + myLibrary.at(i).author;
        pages.textContent = myLibrary.at(i).pages + " pages";
        cardContainer.appendChild(card);
    }
}

addBookToLibrary("Skulduggery Pleasant", "Derek Landy", 384);
addBookToLibrary("Norwegian Wood", "Haruki Murakamai", 390);
addBookToLibrary("Just Kids", "Patti Smith", 320);

