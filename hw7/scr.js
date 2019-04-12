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


let table = document.createElement('table');
table.insertRow();
for(let key in articles[0])
{
    let th = document.createElement('th');
    th.setAttribute('data-key', key);
    th.setAttribute('id', key);
    th.setAttribute('data-direction', 'ASC');
    let text = document.createTextNode(key);
    th.appendChild(text);
    table.firstChild.firstChild.appendChild(th);
}


for(let key in articles)
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





