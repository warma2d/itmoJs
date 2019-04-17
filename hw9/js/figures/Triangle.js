function Triangle(x1, y1, x2, y2, x3, y3) {

    this._a = Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
    this._b = Math.sqrt(Math.pow((x1-x3),2)+Math.pow((y1-y3),2));
    this._c = Math.sqrt(Math.pow((x2-x3),2)+Math.pow((y2-y3),2));

    if(!(this._a + this._b > this._c || this._a + this._c > this._b || this._b + this._c > this._c))
    {
        console.log('Нельзя составить треугольник');
        return false;
    }
}

Triangle.prototype.getSquare = function () {
    let p = this.getPerimeter() / 2;
    return Math.sqrt(p*(p-this._a)*(p-this._b)*(p-this._c));
}

Triangle.prototype.getPerimeter = function () {
    return this._a + this._b + this._c;
}

let triangle1 = new Triangle(1,2, 5,3, 0,10);
console.log('Площадь треугольника: ' +triangle1.getSquare());
console.log('Периметр треугольника: ' +triangle1.getPerimeter());