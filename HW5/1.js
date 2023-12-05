// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let squareArea = (a, b) => console.log (a * b);
let sArea = squareArea(5, 10);
console.log(sArea);

let circleArea = (r, y) =>  Math.pi*Math.pow(r,2);
let cArea = circleArea(5, 10);
console.log(cArea);

let cylinderArea =  (h, r) => 2*Math.pi*r*h+2*Math.pi*r;
let cyArea = cylinderArea(5, 10);
console.log(cyArea);
let arrIterator = (...array) => {
    for (const item of array) {
         console.log(item);
     }
 }
 arrIterator([333, 'string', false]);
let createP = (param)  => {
  document.write(`<p>${param}</p>`);
}
createP ('Lorem');

let createLi = (text) => {
  document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
                </ul>
    `);
}
createLi('tru-lya-lya');
let createLic = (text, count_t) => {
  document.write(`<ul>`);
    for (let i = 1; i < count_t; i++) {
      document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createLic('tru-lay-li', 10 );
let createLiAr =(arr) => {
  document.write (`<ul>`);
  for (const item of arr) {
    document.write (`<li>${item}</li>`);
  }
  document.write (`</ul>`);
}
createLiAr([9999,2323, 'stringa', false]);
const users = [
  {id: 1, name: 'Pershiy', age: 13},
  {id: 2, name: 'Drygiy', age: 31},
  {id: 3, name: 'Tretiy', age: 33},
  {id: 4, name: 'Chetvertiy', age: 11},
  {id: 5, name: 'Pytuy', age: 3},
  {id: 6, name: 'Shostyi', age: 310},
  {id: 7, name: 'Siomyi', age: 130},
  {id: 8, name: 'Vosmya', age: 131},
];

let getUser = (arr) => {
  for (const user of arr) {
    document.write(`<div> ${user.id} ${user.name} ${user.age} </div>`)
  }
}
getUser(users);
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let arr = [20, 3, 4, 5, -50, 100, 19, -200, 5000, 599];
let minArr = (arr) => {
  let min = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minArr(arr));

function sum(arr){
  let s=0;
  for (const item of arr) {
    s +=item;
  }
  console.log(s);
}
sum (arr);
function swap(arr, index1, index2) {
  const n1 = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = n1;
  return arr;
}
console.log(swap([28, 289, 133, 0], 0, 3));





