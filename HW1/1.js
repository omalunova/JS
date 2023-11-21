/*

  - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log

  - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

  - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;

  Додаткове для тих хто цікавився prompt`oм
  - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
*/

let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let bool1 = true;
let bool2 = false;
console.log(s1,s2,s3,s4,n1,n2,n3,n4,n5,n6,n7);
let firstName = 'Malunova ';
let middleName = 'Oksana ';
let lastName = 'Oleksandrivna';
let person = (firstName+middleName+lastName);
console.log(person);
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
let fName = prompt('What is your name?','');
let mName = prompt('What is your middle name?','');
let age = prompt('How old are you?','');
console.log(fName + mName + age);
