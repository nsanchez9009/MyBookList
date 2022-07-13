const addBookButton = document.querySelector("#addButton");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const books = document.querySelector("#books");
const form = document.querySelector("#form");
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
            this.read = "no";
            console.log(library);
        }
        else {
            checkBox.classList.add("checkBoxClicked");
            this.read = "yes";
            console.log(library);
        }
    });

    readCheck.appendChild(readText);
    readCheck.appendChild(checkBox);

    const removeButton = document.createElement("div");
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", () => {
        books.removeChild(bookCard);
        library.splice(library.indexOf(this), 1);
        console.log(library);
    });
    readRemove.appendChild(removeButton);

    books.appendChild(bookCard);

    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function getFormData() {
    if (form.classList.contains("invalidInput")){
        form.removeChild(form.lastChild);
        form.classList.remove("invalidInput");
    }

    const title = document.querySelector("#title")
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    if (title.value === "" || author.value === "" || pages.value === ""){
        const inputMessage = document.createElement("div");
        inputMessage.classList.add("text");
        form.classList.add("invalidInput");
        inputMessage.textContent = "Must fill all fields."
        form.appendChild(inputMessage);
        return;
    }

    const book = new createBook(title.value, author.value, pages.value, read.value);
    library.push(book);
    console.log(library);

    form.reset();
}

