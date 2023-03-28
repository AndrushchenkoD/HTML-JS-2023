// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let arr=[];
//
// let user1=new User(1,'dima','Andrushckenko','asasas','2121212');
// let user2=new User(2,'dima','Andrushckenko','asasas','2121212');
// let user3=new User(3,'dima','Andrushckenko','asasas','2121212');
// let user4=new User(4,'dima','Andrushckenko','asasas','2121212');
// let user5=new User(5,'dima','Andrushckenko','asasas','2121212');
// let user6=new User(6,'dima','Andrushckenko','asasas','2121212');
// let user7=new User(7,'dima','Andrushckenko','asasas','2121212');
// let user8=new User(8,'dima','Andrushckenko','asasas','2121212');
// let user9=new User(9,'dima','Andrushckenko','asasas','2121212');
// let user10=new User(10,'dima','Andrushckenko','asasas','2121212');
// arr=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// console.log(arr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(arr.filter(user => user.id%2 === 0));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(arr.sort((a, b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client{
//     constructor(id,name,surname,email,phone,order) {
//          this.id=id;
//          this.name=name;
//          this.surname=surname;
//          this.email=email;
//          this.phone=phone;
//          this.order=order;
//     }
// }
// let arra=[];
// let user1=new Client(1,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user2=new Client(2,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user3=new Client(3,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user4=new Client(4,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user5=new Client(5,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user6=new Client(6,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','juice','milk']);
// let user7=new Client(7,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','milk']);
// let user8=new Client(8,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','carrot','tomato','milk']);
// let user9=new Client(9,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread','juice','milk']);
// let user10=new Client(10,'dima','andrushchenko','fgdgdkljsdjkdjjkfhfsdkfhsdhfdioh.com','1111',['bread']);
// arra=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// let users=arra.sort((a,b)=>a.order.length-b.order.length);
// console.log(users);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxspeed,motorCapacity,){
// this.model=model;
// this.producer=producer;
// this.year=year;
// this.maxspeed=maxspeed;
// this.motorCapacity=motorCapacity;
// this.drive=function(){
//     console.log(`drive maxspeed is ${this.maxspeed}`);
// };
// this.info=function (){
//     console.log(`model--${this.model}///producer--${this.producer}///year--${this.year}///maxspeed--${this.maxspeed}///motorCapacity--${this.motorCapacity}`);
// };
// this.increaseMaxSpeed=function (newSpeed){
//  this.maxspeed=newSpeed;
// };
// this.addDriver=function (driver){
//   this.driver=driver;
// };
// }
//
// let newCar = new Car('insignia','opel','2002','200','1.8');
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed('300');
// console.log(newCar);
// newCar.addDriver({driver:'dima',age:20,sex:'man'});
// console.log(newCar);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get footsize() {
        return this._footsize;
    }

    set footsize(value) {
        this._footsize = value;
    }
    constructor(name,age,footsize) {

        this._name = name;
        this._age = age;
        this._footsize = footsize;
    }
}
let arr=[];
cinderela1=new Cinderella('Masha',18,36);
cinderela2=new Cinderella('Masha',18,31);
cinderela3=new Cinderella('Masha',18,32);
cinderela4=new Cinderella('Masha',18,33);
cinderela5=new Cinderella('Masha',18,34);
cinderela6=new Cinderella('Masha',18,35);
cinderela7=new Cinderella('Katya',18,36);
cinderela8=new Cinderella('Masha',18,37);
cinderela9=new Cinderella('Masha',18,38);
cinderela10=new Cinderella('Nastya',18,36);

arr=[cinderela1,cinderela2,cinderela3,cinderela4,cinderela5,cinderela6,cinderela7,cinderela8,cinderela9,cinderela10];

let prince={name:'dima',age:20,bootfounded:36};
for (const arrElement of arr) {
    if (arrElement.footsize===prince.bootfounded){
        console.log(`${arrElement.name} ${arrElement.age} ${arrElement.footsize}`);
    }
}

// console.log(arr.find(cin => cin.footsize === prince.bootfounded));