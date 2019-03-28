//Задание 1
/*Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.*/
let height = 7;
let length = 5;
let width = 7;
let S = 0;
let message = '';
S = 2*(height*length + length*width + height*width);
console.log('Площадь параллелепипеда : '+S);
if(width > height)
{
    message = 'Ширина больше высоты';
}
else if(width < height)
{
    message = 'Ширина меньше высоты';
}
else
{
    message = 'Ширина равна высоте';
}
console.log(message);
console.log('-------------');


//Задание 2
/*На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров.
Сколько м2 осталось незанято?*/
S = 10; //соток
length = 15; //м
width = 25; //м
let free = 0; //м2
let cnt = 0;//количество участков
let square = 0;//общая площадь м2
let divSquare = 0;//площадь одного участка м2
square = S*100;
divSquare = (length*width);
cnt = parseInt(square/divSquare);
free = square - cnt*divSquare;
console.log('Осталось незанято м2: '+free);
console.log('-------------');


//Задание 3
//Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
let s1,s2;
s1 = 15;//дм2
s2 = 600;//см2
s = (s1/100)-(s2/10000); //м2
console.log('Площадь овального кольца м2: '+s);
console.log('-------------');


//Задание 4
//Переопределить значения переменных X и Y так, чтобы значение X оказалось меньшим, а Y — большим.
let x,y, temp;
x = 500;
y = 3;
if( x > y)
{
    temp = y;
    y = x;
    x = temp;
}
else
{
    console.log('x уже меньше y ИЛИ x = y');
}
console.log('Переопределить значения переменных X и Y так, чтобы значение X оказалось меньшим, а Y — большим.');
console.log('x='+x);
console.log('y='+y);
console.log('-------------');


//Задание 5
//Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
// Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
let m,n,diff1,diff2;
m = 11.45;
n = 8.5;
diff1 = Math.abs(10 - m);
diff2 = Math.abs(10 - n);
if( diff1 < diff2 )
{
    console.log('m ('+m+') ближе к 10, чем n('+n+')');

}
else if(diff1 > diff2)
{
    console.log('n ('+n+') ближе к 10, чем m('+m+')');
}
else
{
    console.log('m ('+m+') и n('+n+') одинаково близки к 10');
}