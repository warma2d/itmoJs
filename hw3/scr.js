/* 1)
Написать функцию сравнения двух массивов. Функция принимает на вход два массива,
сравнивает их и возвращает true, если массивы равны и false, если не равны.*/
function compareArrays(arr1, arr2) {

    if(! Array.isArray(arr1))
    {
        console.log('arr1 не массив');
        return false;
    }
    if(! Array.isArray(arr2))
    {
        console.log('arr2 не массив');
        return false;
    }

    if(arr1.length != arr2.length)
    {
        return false;
    }

    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i] !== arr2[i])
        {
            return false;
        }
    }

    return true;
}

console.log(compareArrays([],{}));
console.log(compareArrays([0,1,2],[1,2,3]));
console.log(compareArrays([1,2,3],[1,2,'3']));
console.log(compareArrays([1,2,3],[1,2,3]));

console.log('-------------------------------------------');

/*
2)
Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию
(строки, массивы и циклы использовать запрещено).
*/
function countSum(number) {
    if(number == 0) return 0;
    return number%10 + countSum(parseInt(number/10));
}

console.log(countSum(3571));
console.log('-------------------------------------------');

/*
3)
Напишите функцию range, принимающую три аргумента,
два обязательных: начало и конец диапазона,
третий аргумент - необязательный
(если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него,
включая начальное и конечное.
Например, вызов функции range(1, 10, 2)
должен будет вернуть [1, 3, 5, 7, 9].
*/
function range(start, end, step) {
    let arr = [];
    if (! step) step = 1;
    for(let i=start; i<=end; i+=step)
    {
        arr.push(i);
    }
    return arr;
}

console.log(range(1,10,2));
console.log('-------------------------------------------');
/* 4)
Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
будет выводить слово «товар» в нужно форме
(«12 товаров», но «22 товара» и тд).*/

function tovar(count) {

    let word = "товаров";

    if (count % 100 < 5 || count % 100 > 20) {
        if (count % 10 == 1) word = 'товар';
        if (count % 10 > 1 && count % 10 < 5) word = 'товара';
    }

    return word;
}

console.log(tovar(1));
