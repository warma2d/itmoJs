function l(s) {
    console.log(s);
}

data = {
    guitar:{
        name:'Гитара',
        img: 'guitar.jpg',
        price: 100
    },
    harp:{
        name:'Арфа',
        img: 'harp.jpg',
        price: 200
    },
    drum:{
        name:'Барабан',
        img: 'drum.jpg',
        price: 300
    }
};

let zadanie1 = document.createElement('h2');
zadanie1.appendChild(document.createTextNode('Задание 1'));
document.getElementById('body').appendChild(zadanie1);

for(let key in data)
{
    let itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item')

    let name = document.createElement('h2');

    let nameText = document.createTextNode(data[key]['name']);
    name.appendChild(nameText);

    let img = document.createElement('img');
    img.setAttribute('src', 'img/'+data[key]['img']);

    let price = document.createElement('p');
    let priceText = document.createTextNode(data[key]['price']);
    price.appendChild(priceText);

    itemDiv.appendChild(name);
    itemDiv.appendChild(img);
    itemDiv.appendChild(price);

    document.getElementById('body').appendChild(itemDiv);
}


//////////////////////////////////

let zadanie2 = document.createElement('h2');
zadanie2.appendChild(document.createTextNode('Задание 2'));
document.getElementById('body').appendChild(zadanie2);

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
