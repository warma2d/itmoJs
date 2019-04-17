
let book = new Book();
book.setTitle("Книга");
book.setPage(45);

let alphabet = new Book();
alphabet.setTitle("Алфавит");
alphabet.setPage(23);

let tails = new Book();
tails.setTitle("Сказки");
tails.setPage(145);

let library = new Library("Библиотека", 2);
//library.showAllBooks();
library.addToLibrary(book);
library.addToLibrary(alphabet);
//library.addToLibrary(tails);
//library.showAllBooks();

console.log(library.getBook('Алфавит'));

//console.log(book);
//console.log(alphabet);

