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


let table = document.createElement('table');
table.insertRow();
for(key in articles[0])
{
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    table.firstChild.firstChild.appendChild(th);
}


for(key in articles)
{
    let row = table.insertRow();
    let id = row.insertCell();
    let title = row.insertCell();
    let descr = row.insertCell();
    let author = row.insertCell();

    id.innerHTML = articles[key]['id'];
    title.innerHTML = articles[key]['title'];
    descr.innerHTML = articles[key]['description'];
    author.innerHTML = articles[key]['author'];
}

document.getElementById('body').appendChild(table);
