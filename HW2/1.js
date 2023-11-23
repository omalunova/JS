// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr1;
arr1 = ['tunz', 'tutunz', 'tupturup', 'turup', 'tup', 'tup', 'tup', 'turup',  'turup', 'betterofalone'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
let books = {
    title: 'Noname',
    pageCount: 100500,
    genre: 'drama'
}
console.log(books.title, books.genre, books.pageCount);
let booksMas = {
  title: 'Noname Nonamesev',
  pageCount: 200500,
  genre: 'Queen`s drama',
  autors:  [
    { name: 'Nasha', age: 10},
    { name: 'Masha', age: 9},
    { name: 'Natasha', age: 11}
  ]
}
console.log(booksMas.title, booksMas.pageCount, booksMas.genre, booksMas.autors [0].name);
let users = [
     {name: 'cero', username: 3, password: 'ide'},
     {name: 'uno', username: 31, password: 'marshrutka'},
     {name: 'dos', username: 13, password: 'yak'},
     {name: 'tres', username: 313, password: 'velyka'},
     {name: 'cuatro', username: 333, password: 'sobacha'},
     {name: 'cinco', username: 11, password: 'budka'},
     {name: 'seis', username: 33, password: 'vsich'},
     {name: 'siete', username: 1, password: 'pidzyraye'},
     {name: 'ocho', username: 311, password: 'bo'},
     {name: 'nueve', username: 131, password: 'shanson'},
     {name: 'diez', username: 133, password: 'v'}
 ];
console.log (users[0].password, users[1].password, users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password, )
// Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Please enter x');
if (x === 0) {
         console.log('True');}
     else {
         console.log('False');
     }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Please enter time');
 if (time < 15) {
     console.log('First part');}
  else if (time > 14 && time < 30) {
   console.log('Second part');}
      else if (time > 29 && time < 45 ){
     console.log('third part');}
      else {
     console.log('fourth part');
 }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Please enter day');
if (day > 1 && day < 10 ) {
  console.log('First decade');}
else if (day >= 10  && day < 21) {
  console.log('Second decade');}
else if (day >= 21 && day <= 31 ){
  console.log('third decade');}
else {
  console.log('error');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let n = + prompt ('Please enter day');
  switch (n) {
    case 1:
        console.log('Monday');
         break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
      default:
          console.log('Error');
  }
//
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5)
{ console.log('Супер');}
else if(coursesAndDurationArray[0].monthDuration <= 5)
{ console.log('Не супер'); }
if (coursesAndDurationArray[1].monthDuration >5)
{ console.log('Cynep');}
else if(coursesAndDurationArray[1].monthDuration <=5)
{ console.log("Не супер");}
if (coursesAndDurationArray[2].monthDuration > 5)
{ console.log('Супер');}
else if(coursesAndDurationArray[2].monthDuration <= 5)
{ console.log('Не супер'); }
if (coursesAndDurationArray[3].monthDuration > 5)
{ console.log('Супер');}
else if(coursesAndDurationArray[3].monthDuration <= 5)
{ console.log('Не супер'); }
if (coursesAndDurationArray[4].monthDuration > 5)
{ console.log('Супер');}
else if(coursesAndDurationArray[4].monthDuration <= 5)
{ console.log('Не супер'); }
if (coursesAndDurationArray[5].monthDuration > 5)
{ console.log('Супер');}
else if(coursesAndDurationArray[5].monthDuration <= 5)
{ console.log('Не супер'); }

