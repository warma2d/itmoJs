function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let canvas = new Canvas();


let enemys = [];
for(let i=0; i<6; i++)
{
    let x = random(0, canvas._width);
    let y = random(0, canvas._height);
    enemys.push(new Enemy(canvas, x, y));
}

player = new Player('Вася', canvas, enemys);

let timerId = setInterval(function() {
    player.regenerateEnemys();
}, 5000);

document.addEventListener('keypress', function (event) {
    if(event.code == player._codeKeyUp)
    {
        player.step('up');
    }
    else if(event.code == player._codeKeyRight)
    {
        player.step('right');
    }
    else if(event.code == player._codeKeyDown)
    {
        player.step('down');
    }
    else if(event.code == player._codeKeyLeft)
    {
        player.step('left');
    }

});
