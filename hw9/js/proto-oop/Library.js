function Library(libTitle, size) {
    this._libTitle = libTitle;
    this._maxSize = size;
    this._books = [];
}

Library.prototype.addToLibrary = function (book) {
    if (!(book instanceof Book)) {
        console.log("объект не является объектом Book");
        return;
    }

    if (this._books.length === this._maxSize) {
        console.log("нет места для", book.getTitle());
        return;
    }

    this._books.push(book);
};


Library.prototype.showAllBooks = function() {
    if (!this._books.length) {
        console.log("Нет книг в библиотеке");
        return;
    }
    for(let i = 0; i < this._books.length; i++) {
        console.log(this._books[i].getTitle(),
            this._books[i].getPage());
    }
};

Library.prototype.getBook = function (title) {
    for(let key in this._books)
    {
        if(title == this._books[key]['_title'])
        {
            return this._books[key];
        }
    }
    return false;
}