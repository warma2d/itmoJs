function l(s) {
    console.log(s);
}



let zadanie1 = document.createElement('h2');
zadanie1.appendChild(document.createTextNode('Задание 1'));
document.getElementById('body').appendChild(zadanie1);

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание JS",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание PHP",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание HTML",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание Базы Данных",
        author: "Peter"
    }
];


function createTable(arrObjs)
{
    let table = document.createElement('table');
    table.insertRow();
    for(let key in arrObjs[0])
    {
        let th = document.createElement('th');
        th.setAttribute('data-key', key);
        th.setAttribute('id', key);
        th.setAttribute('data-direction', 'ASC');
        let text = document.createTextNode(key);
        th.appendChild(text);
        table.firstChild.firstChild.appendChild(th);
    }

    let cell;

    for(let key in arrObjs)
    {
        let row = table.insertRow();

        for(let key2 in arrObjs[key])
        {
            cell = row.insertCell();
            cell.innerHTML = arrObjs[key][key2];
        }
    }

    return table;

}

let table = createTable(articles);
document.getElementById('body').appendChild(table);





