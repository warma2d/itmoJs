function l(s)
{
    console.log(s);
}


// для домашнего задания номер 1 и 2
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};





/*Написать функцию со следующими аргументами: объект, from (значение от),
 to (значение до). Функция должна вернуть объект с товарами,
 цены которых лежат в диапазоне от значения from до значения to.
 Пример вызова функции getGoods(goods, 2000, 3000);
 в данном случае функция должна вернуть все товары,
 у которых цена в диапазоне от 2000 до 3000.
 Для проверки функции используйте объект goods из файла с урока.
  */
function getGoods(obj, from, to) {
    let out = {};
    for(let key in obj)
    {
        if(obj[key]['price'] >= from && obj[key]['price'] <= to)
        {
            out[key] = obj[key];
        }
    }
    return out;
}
l(getGoods(goods, 2000, 3400));
l('------------------------------------------------------------------');


/*
Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект,
title - название товара, count - количество товара,
которое нужно добавить в корзину. Функция ищет товар с указанным названием,
если количество позволяет, то уменьшает количество товара на countToCart,
если не позволяет, то выводит информацию об этом в консоль и завершает работу.
Для проверки функции используйте объект goods из файла с урока.
 */
function addToCart(obj, title, countToCart) {
    for(let key in obj)
    {
        if(obj[key]['title'] == title)
        {
            if(obj[key]['count'] >= countToCart)
            {
                obj[key]['count'] -= countToCart;
            }
            else
            {
                l('Недостаточно товара: ' + obj[key]['title'] + ' на складе');
                return;
            }
        }
    }
    l(obj);
}
addToCart(goods, 'Гитара', 3);
addToCart(goods, 'Гитара', 50);
l('------------------------------------------------------------------');



// для домашнего задания номер 3
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];
/*Напишите функцию, которая отсортирует массив
объектов books по значению свойства title.
Объект в файле с занятия.
 */
books.sort(function (a,b) {
    let r = 0;
    if (a.title > b.title) {
        r = 1;
    } else if (a.title < b.title) {
        r = -1;
    }
    return r;
})
l(books);
l('------------------------------------------------------------------');


/*
Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
(понедельник - первый и т.д.).
Выведите на экран текущий день недели.
 */
let days = {
    1:'Понедельник',
    2:'Вторник',
    3:'Среда',
    4:'Четверг',
    5:'Пятница',
    6:'Суббота',
    7:'Воскресенье'
};

let d = new Date();
let numDay = d.getDay();
if(numDay === 0)
{
    numDay = 7;
}
l(days[numDay]);