class Player
{
    constructor(name, canvas, enemys)
    {
        this._enemys = enemys;
        this._canvas = canvas;
        this._x = 0;
        this._y = 0;
        this._name = name;
        this._width = 100;
        this._height = 100;
        this._color = 'green';
        this._points = 0;
        this._gameTime = 0;
        this._codeKeyUp = 'KeyW';
        this._codeKeyRight = 'KeyD';
        this._codeKeyDown = 'KeyS';
        this._codeKeyLeft = 'KeyA';
        this._step = 10;
        this.create();

    }

    step(direction)
    {
        let x = this._x;
        let y = this._y;

        this.delete();

        if(direction == 'up')
        {
            y = y - this._step;

            if(y >= 0)
            {
                this._y = y;
            }
        }
        else if(direction == 'right')
        {
            x = x + this._step;//010

            if(x <= canvas._width - this._width)
            {
                this._x = x;
            }
        }
        else if(direction == 'down')
        {
            y = y + this._step;

            if(y <= canvas._height - this._height)
            {
                this._y = y;
            }
        }
        else if(direction == 'left')
        {
            x = x - this._step;

            if(x >= 0)
            {
                this._x = x;
            }
        }


        this.create(this._x, this._y);



        for(let i=0; i<this._enemys.length; i++)
        {

            let enemyEndX = this._enemys[i]['_x'] + 100;
            let playerEndX = this._x + 100;
            let enemyEndY = this._enemys[i]['_y'] + 100;
            let playerEndY = this._y + 100;

            if
            (
                this._x <= enemyEndX
                && playerEndX >= this._enemys[i]['_x']
                && playerEndY >= this._enemys[i]['_y']
                && this._y <= enemyEndY
            )
            {
                this._points++;
                this._enemys[i].delete();
                this._enemys.splice(i,1);
            }


            document.querySelector('#footer > p > span').innerHTML = this._points;

        }

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
        this._canvas._context.fillStyle = 'green';
        this._canvas._context.fillRect(x, y, this._width, this._height);
    }


    regenerateEnemys()
    {
        for(let i=0; i<this._enemys.length; i++)
        {
            this._enemys[i].delete();
            this._enemys.splice(i,1);
        }

        for(let i=0; i<6; i++)
        {
            let x = random(0, this._canvas._width);
            let y = random(0, this._canvas._height);
            enemys.push(new Enemy(this._canvas, x, y));
        }

        this.create(this._x, this._y);

    }

}