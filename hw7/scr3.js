function generateLotteryTable(n)
{
    let table = document.createElement('table');
    table.setAttribute('id', 'lottery');
    let html = '';
    let present = '';
    let maxPresentCnt = 3;


    table.setAttribute('data-attempts', 0);
    table.setAttribute('data-found', 0);
    let cnt = 0;

    for(let i =0; i<n; i++)
    {
        html += '<tr>';

        for(let k =0; k<n; k++)
        {
            if(Math.floor(Math.random() * 10) >= 5)
            {
                if(cnt < maxPresentCnt)
                {
                    present = 'Ура!'
                    cnt++;
                }
                else
                {
                    present = 'Пусто'
                }
            }
            else
            {
                present = 'Пусто'
            }

            html += '<td data-present="'+present+'" id="'+i+'-'+k+'">';
            html += 'Кликни'
            html += '</td>';
        }
        html += '</tr>';
    }

    table.innerHTML = html;

    table.setAttribute('data-allPresents', cnt);

    return table;
}


let zadanie2 = document.createElement('h2');
zadanie2.appendChild(document.createTextNode('Задание 2'));
document.getElementById('body').appendChild(zadanie2);


let n = 3;
document.getElementById('body').appendChild(generateLotteryTable(n));


let attemptDiv = document.createElement('div');
attemptDiv.setAttribute('id', 'attemptDiv');
attemptDiv.appendChild(document.createTextNode(''));
document.getElementById('body').appendChild(attemptDiv);

for(let i =0; i<n; i++)
{
    for(let k =0; k<n; k++)
    {
        document.getElementById(i+'-'+k).addEventListener('click', function () {


            let allPresents = parseInt(document.getElementById('lottery').getAttribute('data-allPresents'));
            let found = parseInt(document.getElementById('lottery').getAttribute('data-found'));
            if(found >= allPresents)
            {
                alert('Ура! Вы нашли все призы!');
                return;
            }

            let attempts = 0;
            attempts = parseInt(document.getElementById('lottery').getAttribute('data-attempts'));
            if(attempts >= 3)
            {
                alert('Увы, все ваши 3 попытки закончились! :(');
                return;
            }

            this.innerHTML = '';

            if(this.getAttribute('data-present') == 'Ура!')
            {
                this.style.background = 'green';
                found = 0;
                found = parseInt(document.getElementById('lottery').getAttribute('data-found'));
                found++;
                document.getElementById('lottery').setAttribute('data-found', found);

                let allPresents = parseInt(document.getElementById('lottery').getAttribute('data-allPresents'));
                if(found >= allPresents)
                {
                    alert('Ура! Вы нашли все призы!');
                    return;
                }

            }
            else
            {
                this.style.background = 'red';
                attempts = parseInt(document.getElementById('lottery').getAttribute('data-attempts'));
                attempts++;
                document.getElementById('lottery').setAttribute('data-attempts', attempts);
            }

            document.getElementById('attemptDiv').innerHTML = 'Осталось попыток: ' + (3-attempts);

        });
    }
}

document.getElementById('attemptDiv').innerHTML = 'Осталось попыток: 3';