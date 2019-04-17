function Rectangle(leftDownDotX, leftDownDotY, rightUpDotX, rightUpDotY) {

    this._a = Math.abs(rightUpDotX - leftDownDotX);
    this._b = Math.abs(rightUpDotY - leftDownDotY);

}

Rectangle.prototype.getSquare = function () {
    return this._a * this._b;
}

Rectangle.prototype.getPerimeter = function () {
    return 2*(this._a + this._b);
}


let rectangle1 = new Rectangle(0,0, 10,20);
console.log('Площадь прямоугольника: ' +rectangle1.getSquare());
console.log('Периметр прямоугольника: ' +rectangle1.getPerimeter());