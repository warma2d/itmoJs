function Book() {

}
// метод - сеттер
Book.prototype.setTitle = function (title) {
    if (title.length < 2) {
        return;
    }
    this._title = title;
};

Book.prototype.setPage = function(pageCount) {
    if (pageCount < 10) {
        return;
    }
    this._page = pageCount;
};
// метод - геттер
Book.prototype.getTitle = function () {
    return this._title;
};

Book.prototype.getPage = function(){
    return this._page;
};











