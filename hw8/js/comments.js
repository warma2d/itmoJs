/*
* Реализовать возможность добавления комментариев. Комментарий вводится в textarea.
* Комментарий добавляется по нажатию на кнопку Комментировать.
* При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый),
* имя автора (пока у всех комментарие одинаковое),
* дата добавления комментария (текущая дата),
* текст комментария (тот, что был введен в textarea).
* */

function getTrueMonth(month)
{
    month++;
    if(month < 10)
    {
        month = '0'+month;
    }
    return month;
}







document.getElementById('addCommentBtn').addEventListener('click', function () {
    let maxLengthComment = 300;
    let commentText = document.getElementById('textarea').value;
    commentText.trim();
    let result = document.getElementById('result');
    if(commentText.length > maxLengthComment)
    {
        result.innerText = 'Вы превысили максимально допустимую длину комментария '
            + maxLengthComment +' символов. Вы ввели: '+ commentText.length;

        result.classList.remove('success');
        result.classList.add('error');
    }
    else
    {
        let commentBlock = document.createElement('div');
        commentBlock.setAttribute('class','commentBlock');

        let avatar = document.createElement('img');
        avatar.setAttribute('class', 'avatar');
        avatar.setAttribute('src', 'img/man.png');

        let name = document.createElement('p');
        name.setAttribute('class','name');
        name.innerText = 'Василий';

        let time = document.createElement('p');
        time.setAttribute('class','time');
        let dd = new Date();
        time.innerText = dd.getDate()+'.'+getTrueMonth(dd.getMonth())+'.'+dd.getFullYear()+ ' '+ dd.getHours()+':'+dd.getMinutes();

        let comment = document.createElement('div');
        comment.setAttribute('class','comment');
        comment.innerText = commentText;

        commentBlock.appendChild(avatar);
        commentBlock.appendChild(name);
        commentBlock.appendChild(time);
        commentBlock.appendChild(comment);

        document.getElementById('comments').appendChild(commentBlock);

        result.innerText = 'Ваш коммент успешно добавился!';

        result.classList.remove('error');
        result.classList.add('success');
    }
})