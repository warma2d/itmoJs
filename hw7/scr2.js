let tables2 = document.getElementsByTagName('table');
let table2 = tables2[0];

keys = [];
let tr = table2.children[0].children[0]['cells'];
for (let key in tr) //собираем ключи заголовков столбцов
{
    if(typeof tr[key] == 'object')
    {
        keys.push(tr[key].getAttribute('data-key'));
    }

}

tr = table2.children[0].children;
rowArr = [];
for (let key in tr) //собираем строки
{
    if(key == 0 || typeof tr[key] != 'object') continue;
    rowArr.push(tr[key]);
}


tr = table2.children[0].children[0]['cells'];
for (let key in tr)
{
    if(typeof tr[key] == 'object')
    {
        elem = document.getElementById(tr[key].getAttribute('id'));
        elem.addEventListener('click', sortByKey );
    }
}





function getKeyId(key) { //вспомогательная ф-я
    for(let i=0; i<keys.length; i++)
    {
        if(keys[i] == key) return i;
    }
}

function sortByKey() {

    let key = this.id;
    let direction = this.getAttribute('data-direction');

    if(this.getAttribute('data-direction') == 'ASC')
    {
        this.setAttribute('data-direction', 'DESC');
    }
    else
    {
        this.setAttribute('data-direction', 'ASC');
    }


    rowArr.sort(function(a, b) {

        let keyId = getKeyId(key, keys);
        let x = a.children[keyId].innerHTML;
        let y = b.children[keyId].innerHTML;

        if(direction == 'ASC')
        {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        else
        {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });

    for(let i=0; i < rowArr.length; i++) //Удаляем строки
    {
        table2.deleteRow(1);
    }


    for (let key in rowArr)//Вставляем строки
    {
        table2.children[0].appendChild(rowArr[key]);
    }

}




//l(sortByKey(rowArr, 'id', 'DESC'));




