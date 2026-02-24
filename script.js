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
        let card = bookTemplate.content.cloneNode(true);
        let bookCard = card.querySelector(".book-card");
        bookCard.dataset.bookId = myLibrary.at(i).id;

        let title = card.querySelector(".book-title");
        let author = card.querySelector(".book-author")
        let pages = card.querySelector(".book-pages");
        let readBtn = card.querySelector(".read-btn");
        let readingBtn = card.querySelector(".reading-btn");
        let removeBtn = card.querySelector(".remove-btn");

        readBtn.addEventListener("click", function () {
            if (bookCard.classList.contains("status-reading")) {
                bookCard.classList.remove("status-reading")
                readingBtn.src = "assets/clock-time-eight-outline.svg";
            }
            if (bookCard.classList.contains("status-read")) {
                bookCard.classList.toggle("status-read");
                readBtn.src = "assets/check-circle-outline.svg";
            } else if (!bookCard.classList.contains("status-read")){
                bookCard.classList.toggle("status-read");
                readBtn.src = "assets/check-circle.svg";
            }
        });
        readingBtn.addEventListener("click", function () {
            if (bookCard.classList.contains("status-read")) {
                bookCard.classList.remove("status-read")
                readBtn.src = "assets/check-circle-outline.svg";
            }
            if (bookCard.classList.contains("status-reading")) {
                bookCard.classList.toggle("status-reading");
                readingBtn.src = "assets/clock-time-eight-outline.svg";
            } else if (!bookCard.classList.contains("status-reading")){
                bookCard.classList.toggle("status-reading");
                readingBtn.src = "assets/clock-time-eight.svg";
            }

        });
        
        removeBtn.addEventListener("click", function () {
            let targetId = bookCard.dataset.bookId;
            let targetBook = myLibrary.findIndex(obj => obj.id === targetId);
            myLibrary.splice(targetBook, 1);
            bookCard.remove();
        })
        title.textContent = myLibrary.at(i).title;
        author.textContent = "by: " + myLibrary.at(i).author;
        pages.textContent = myLibrary.at(i).pages + " pages";
        cardContainer.appendChild(card);
    }
}

addBookToLibrary("Skulduggery Pleasant", "Derek Landy", 384);
addBookToLibrary("Norwegian Wood", "Haruki Murakami", 390);
addBookToLibrary("Just Kids", "Patti Smith", 320);

displayBooks();

//TODO:
//styling, new book