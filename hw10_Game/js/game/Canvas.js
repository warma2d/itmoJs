class Canvas
{
    constructor()
    {
        this._width = document.body.clientWidth;
        this._height = window.innerHeight-3;
        this._canvas = document.getElementsByTagName('canvas')[0];
        this._canvas.width  = this._width;
        this._canvas.height = this._height;
        this._context = this._canvas.getContext('2d');

        this._context.fillStyle = 'wheat';
        this._context.fillRect(0, 0 , this._width, this._height);

    }

}