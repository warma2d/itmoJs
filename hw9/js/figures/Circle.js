function Circle(centreX, centreY, dotX, dotY) {

    this._R = Math.sqrt(Math.pow((dotX-centreX),2)+Math.pow((dotY-centreY),2)) // расчитываем радиус

}

Circle.prototype.getSquare = function () {
    return Math.PI*Math.pow(this._R, 2);
}

Circle.prototype.getPerimeter = function () {
    return 2*Math.PI*this._R;
}

Circle.prototype.getRadius = function () {
    return this._R;
}

let circle1 = new Circle(2,2, 3,4);
console.log('Радиус окружности: ' + circle1.getRadius());
console.log('Площадь круга: ' +circle1.getSquare());
console.log('Длина окружности: ' +circle1.getPerimeter());