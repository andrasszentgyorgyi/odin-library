const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages){
    myLibrary.push(new Book(title, author, pages));
}

function libraryCatalog(){
    for (let i = 0; i<myLibrary.length; i++){
        console.log(myLibrary.at(i));
    }
}