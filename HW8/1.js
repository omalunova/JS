// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User  (id, name, surname, email, phone){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone; }


const users = [
  new User(1, 'Uno', 'First', '1@8.com', '121314'),
  new User(2, 'Dos', 'Second', '2@8.com', '121314'),
  new User(3, 'Tres', 'Third', '3@8.com', '121314'),
  new User(4, 'Cuatro', 'First', '4@8.com', '121314'),
  new User(5, 'Cinco', 'Fourth', '5@8.com', '121314'),
  new User(6, 'Seis', 'Sixth', '6@8.com', '121314'),
  new User(7, 'Siete', 'Seventh', '7@8.com', '121314'),
  new User(8, 'Ocho', 'Eighth', '8@8.com', '121314'),
  new User(9, 'Nueve', 'Ninth', '9@8.com', '121314'),
  new User(10, 'Diez', 'Tenth', '10@8.com', '121314')];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => !(user.id % 2)));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((n1, n2) => n1.id - n2.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
  constructor (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;}
}
const clients = [
  new Client(1, 'Uno', 'First', '1@8.com', '121314',['apple' ]),
  new Client(2, 'Dos', 'Second', '2@8.com', '121314', ['apple','lime', 'pinapple']),
  new Client(3, 'Tres', 'Third', '3@8.com', '121314', ['lime', 'orange']),
  new Client(4, 'Cuatro', 'First', '4@8.com', '121314',['orange' ]),
  new Client(5, 'Cinco', 'Fourth', '5@8.com', '121314', ['banan', 'mango','banan','apple'] ),
  new Client(6, 'Seis', 'Sixth', '6@8.com', '121314', ['mango', 'cherry']),
  new Client(7, 'Siete', 'Seventh', '7@8.com', '121314', ['cherry' ]),
  new Client(8, 'Ocho', 'Eighth', '8@8.com', '121314', ['melon', 'strawberry']),
  new Client(9, 'Nueve', 'Ninth', '9@8.com', '121314',['strawberry', 'blackbarry','melon']),
  new Client(10, 'Diez', 'Tenth', '10@8.com', '121314',['blackbarry', 'apple'])];
console.log(clients);
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((c1, c2) => c1.order.length - c2.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Cars(model, producer, yearProd, maxSpeed, volume) {
  this.model = model;
  this.producer = producer;
  this.yearProd = yearProd;
  this.maxSpeed = maxSpeed;
  this.volume = volume;

  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }
  this.info = function () {
    console.log('model: ', this.model);
    console.log('producer: ', this.producer);
    console.log('yearProd: ', this.yearProd);
    console.log('maxSpeed: ', this.maxSpeed);
    console.log('volume: ', this.volume);
    console.log('driver: ', this.driver);
  }
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
    console.log('New Speed:', this.maxSpeed);
  }
  this.changeYear = function (newYear) {
    this.yearProd = newYear;
    console.log('New Year:', this.yearProd);
  }
  this.addDriver = function (driver) {
    this.driver = driver;
  }
}

const redCar = new Cars('v50', 'Volvo', 2012, 100, 1.6);

redCar.drive();
redCar.increaseMaxSpeed(5);
redCar.changeYear(2020);
redCar.addDriver({name: 'Semi', age: 18 });

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarsCl {
  constructor(model, producer, yearProd, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.yearProd = yearProd;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
  }
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }
  info() {
    console.log('model : ', this.model);
    console.log('producer : ', this.producer);
    console.log('yearProd : ', this.yearProd);
    console.log('maxSpeed : ', this.maxSpeed);
    console.log('volume : ', this.volume);
    console.log('driver : ', this.driver);
  }
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }
  changeYear(newYear) {
    this.yearProd = newYear;
  }
  addDriver(driver) {
    this.driver = driver;
  }
}
const greenCar = new CarsCl('v50', 'Volvo', 2012, 100, 1.6);

greenCar.drive();
greenCar.increaseMaxSpeed(5);
greenCar.changeYear(2020);
greenCar.addDriver({name: 'Semi', age: 18 });
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella  {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

const CinderArr = [
  new Cinderella('Sina', 16, 12),
  new Cinderella('Zina', 17, 11),
  new Cinderella('Vana', 18, 9),
  new Cinderella('Tanya', 30, 8),
  new Cinderella('Reya', 31, 7),
  new Cinderella('Rela', 27, 11),
  new Cinderella('Dere', 38, 6),
  new Cinderella('Desa', 45, 7),
  new Cinderella('Sira', 12, 5),
  new Cinderella('Sana', 45, 8),
];

class Prince  {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.bootSize = bootSize;
  }
}

 function WhoCinderella( CinderArr) {
    if (!this.bootSize) throw new Error('нема)')
    for (const cinderella of arr) {
      if (cinderella.footSize === this.bootSize) {
        return cinderella;
      }
    }
  }


