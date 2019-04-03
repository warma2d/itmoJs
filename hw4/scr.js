function strReplace(str, needle, replacement) {
    if(! str) str = '';
    if(! needle) needle = '';
    if(! replacement) replacement = '';
    console.log('Исходная строка: "' + str+'"');
    console.log('Что ищем: "' + needle+'"');
    console.log('На что заменяем: "' + replacement+'"');
    let out = '';
    out = str.replace(needle, replacement);
    console.log(out);
    return out;
}

let str = prompt('Введите строку, в которой будет производиться поиск');
let needle = prompt('Введите строку, которую ищем');
let replacement = prompt('Введите строку, на которую заменяем');
strReplace(str, needle, replacement);

console.log('-----------------------------------');

/* 2)
Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы.
Написать функцию, которая реализует следующий функционал:
требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив.
Например, если дана строка "дом 48, корпус 9, парадная 7, этаж 4",
то в массиве должны оказаться числа 48, 9, 7 и 4*/
function getNumberArrFromStr(str) {
    if(! str) return [];
    return str.match(/(\d+)/g);
}

str = 'дом 48, корпус 9, парадная 7, этаж 4';
console.log(getNumberArrFromStr(str));
console.log('-----------------------------------');


/* 3)
Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.
Переставьте названия так, чтобы они были упорядочены по алфавиту.*/
function getSortCityStr(str) {
    if(! str) return '';
    return str.match(/([\w|А-я-]+)/g).sort().toString().replace(/,/g, " ");
}

console.log(getSortCityStr('Спб Москва Архангельск Новгород Орел Орешек Санкт-Петербург'));