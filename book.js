let library = [];

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let temp = `${title} by ${author}, ${pages} pages, `;

        if (read.toLowerCase() === "no"){
            temp += "not read yet";
        }
        else if (read.toLowerCase() === "yes"){
            temp += "read";
        }

        return temp;
    }
}

book.prototype.info = function () {
    
    let temp = `${title} by ${author}, ${pages} pages, `;

    if (read.toLowerCase() === "no"){
        temp += "not read yet";
    }
    else if (read.toLowerCase() === "yes"){
        temp += "read";
    }

    return temp;
}



const theHobbit = new book(title, author, pages, read);

console.log(theHobbit.info());