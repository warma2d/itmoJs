class Enemy
{
    constructor(canvas, x, y)
    {
        this._canvas = canvas;
        this._x = x;
        this._y = y;
        this._width = 100;
        this._height = 100;
        this._color = 'red';
        this.create();
    }

    delete()
    {
        this._canvas._context.fillStyle = 'wheat';
        this._canvas._context.fillRect(this._x, this._y, this._width, this._height);
    }

    create(x,y)
    {
        if(x === undefined || y === undefined)
        {
            x = this._x;
            y = this._y;
        }
        this._canvas._context.fillStyle = 'red';
        this._canvas._context.fillRect(x, y, this._width, this._height);
    }
}