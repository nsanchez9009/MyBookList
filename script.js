const addBookButton = document.querySelector("#addButton");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const books = document.querySelector("#books");
const modalCheckBox = document.querySelector("#read");

addBookButton.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
});

modalCheckBox.addEventListener("click", () => {
    if (modalCheckBox.value === "no") {
        modalCheckBox.value = "yes";
    }
    else if (modalCheckBox.value === "yes") {
        modalCheckBox.value = "no";
    }
})


let library = [];
let libraryIndex = 0;

function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info();
}

createBook.prototype.info = function() {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const info = document.createElement("div");
    info.classList.add("info");
    bookCard.appendChild(info);

    const cardTitle = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardPages = document.createElement("div");

    cardTitle.classList.add("text", "title");
    cardTitle.textContent = `Title: ${this.title}`;

    cardAuthor.classList.add("text", "author");
    cardAuthor.textContent = `Author: ${this.author}`;

    cardPages.classList.add("text", "pages");
    cardPages.textContent = `Pages: ${this.pages}`;

    info.appendChild(cardTitle);
    info.appendChild(cardAuthor);
    info.appendChild(cardPages);

    const readRemove = document.createElement("div");
    readRemove.classList.add("readRemove");
    bookCard.appendChild(readRemove);

    const readCheck = document.createElement("div");
    readCheck.classList.add("readCheck");
    readRemove.appendChild(readCheck);

    const readText = document.createElement("div");
    const checkBox = document.createElement("div");

    readText.classList.add("text");
    readText.textContent = "Read"
    checkBox.classList.add("checkBox");
    
    if (this.read === "yes") {
        checkBox.classList.add("checkBoxClicked");
    }

    checkBox.addEventListener("click", () => {
        if (checkBox.classList.contains("checkBoxClicked")) {
            checkBox.classList.remove("checkBoxClicked");
            //Change the value in the array eventually.
        }
        else {
            checkBox.classList.add("checkBoxClicked");
        }
    });

    readCheck.appendChild(readText);
    readCheck.appendChild(checkBox);

    const removeButton = document.createElement("div");
    removeButton.classList.add("remove");
    readRemove.appendChild(removeButton);

    books.appendChild(bookCard);

    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function getFormData() {
    const title = document.querySelector("#title")
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    const book = new createBook(title.value, author.value, pages.value, read.value);
    library.push(book);
    console.log(library);
}

