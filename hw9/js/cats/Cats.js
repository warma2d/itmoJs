function Cat(name, age, weight, strength) {

    if(name == '')
    {
        console.log('Ошибка! Пустое имя!');
        return;
    }

    if(age > 20)
    {
        console.log('Ошибка! Подозрительный кот, слишком преклонный возраст');
        return;
    }

    this._name = name;
    this._age = age;
    this._weight = weight;
    this._strength = strength;
}

Cat.prototype.getSuccessValue = function(age, weight, strength){
    let A = - Math.pow(age,2) + 20 * age;
    let W = weight;
    let S = strength * 4;
    return A + W + S; //суммарная успешность на победу от возраста, веса и силы
}

Cat.prototype.fight = function (anotherCat) {

    if (!(anotherCat instanceof Cat)) {
        console.log("Ошибка! В бой вы передаёте не кота!");
        return;
    }

    let success1 = this.getSuccessValue(this._age, this._weight, this._strength);
    let success2 = this.getSuccessValue(anotherCat._age, anotherCat._weight, anotherCat._strength);

    console.log('Успех на победу основного кота: ' + success1);
    console.log('Успех на победу вторичного кота: ' + success2);

    if(success1 > success2)
    {
        return true;//победил основной кот
    }
    else
    {
        return false; // победил вторичный кот
    }

}

let cat1 = new Cat('Вася', 7, 5, 5); // молодой, сильный, спортивный
let cat2 = new Cat('Игорь', 19, 7, 1); // престарелый, толстый, слабый
let cat3 = new Cat('Игорь', 0.5, 1, 1); // котенок

console.log(cat1.fight(cat2));
console.log(cat3.fight(cat2));
