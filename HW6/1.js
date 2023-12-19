// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let w = 'hello world';
let l = 'lorem ipsum';
let j = 'javascript is cool';
console.log(w.length);
console.log(l.length);
console.log(j.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(w.toUpperCase());
console.log(l.toUpperCase());
console.log(j.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let wB = 'HELLO WORLD';
let lB = 'LOREM IPSUM';
let jB = 'JAVASCRIPT IS COOL';
console.log(wB.toLowerCase());
console.log(lB.toLowerCase());
console.log(jB.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let arr = str1.split(' ');
console.log (arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let chArray = [10,8,-7,55,987,-1011,0,1050,0];
nArray = chArray.toString();
console.log (nArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let direction = ['descending'];
sortNums = (nums, direction) => {
  if (direction.includes('ascending'))
  {
    nums.sort();
    console.log(nums);
  }
  if (direction.includes ('descending'))
  {
    nums.sort((a, b) => b - a);
    console.log(nums);
  }
}
sortNums(nums,'descending');
// - є масив
 let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

let filteredArray = coursesAndDurationArray.filter (coursesAndDurationArray=> coursesAndDurationArray.monthDuration > 5);
console.log(filteredArray);

// =========================
//   описати колоду карт (від 6 до туза без джокерів)
let cards = [
  {cardSuit: 'spade', value: '6', color: 'black'},
  {cardSuit: 'spade', value: '7', color: 'black'},
  {cardSuit: 'spade', value: '8', color: 'black'},
  {cardSuit: 'spade', value: '9', color: 'black'},
  {cardSuit: 'spade', value: '10', color: 'black'},
  {cardSuit: 'spade', value: 'jack', color: 'black'},
  {cardSuit: 'spade', value: 'queen', color: 'black'},
  {cardSuit: 'spade', value: 'king', color: 'black'},
  {cardSuit: 'spade', value: 'ace', color: 'black'},

  {cardSuit: 'diamond', value: '6', color: 'red'},
  {cardSuit: 'diamond', value: '7', color: 'red'},
  {cardSuit: 'diamond', value: '8', color: 'red'},
  {cardSuit: 'diamond', value: '9', color: 'red'},
  {cardSuit: 'diamond', value: '10', color: 'red'},
  {cardSuit: 'diamond', value: 'jack', color: 'red'},
  {cardSuit: 'diamond', value: 'queen', color: 'red'},
  {cardSuit: 'diamond', value: 'king', color: 'red'},
  {cardSuit: 'diamond', value: 'ace', color: 'red'},

  {cardSuit: 'heart', value: '6', color: 'red'},
  {cardSuit: 'heart', value: '7', color: 'red'},
  {cardSuit: 'heart', value: '8', color: 'red'},
  {cardSuit: 'heart', value: '9', color: 'red'},
  {cardSuit: 'heart', value: '10', color: 'red'},
  {cardSuit: 'heart', value: 'jack', color: 'red'},
  {cardSuit: 'heart', value: 'queen', color: 'red'},
  {cardSuit: 'heart', value: 'king', color: 'red'},
  {cardSuit: 'heart', value: 'ace', color: 'red'},

  {cardSuit: 'clubs', value: '6', color: 'black'},
  {cardSuit: 'clubs', value: '7', color: 'black'},
  {cardSuit: 'clubs', value: '8', color: 'black'},
  {cardSuit: 'clubs', value: '9', color: 'black'},
  {cardSuit: 'clubs', value: '10', color: 'black'},
  {cardSuit: 'clubs', value: 'jack', color: 'black'},
  {cardSuit: 'clubs', value: 'queen', color: 'black'},
  {cardSuit: 'clubs', value: 'king', color: 'black'},
  {cardSuit: 'clubs', value: 'ace', color: 'black'}
];
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// - знайти піковий туз
spadeAce = (cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
console.log(spadeAce);
 // - всі шістки
six = cards.find((card) => card.value === '6');
console.log(six);
// // - всі червоні карти
red = (cards.filter((card) => card.color === 'red'));
console.log(red);
// // - всі буби
diamond = (cards.filter((card) => card.cardSuit === 'diamond'));
console.log(diamond);
// // - всі трефи від 9 та більше
clubs = cards.filter((card) => card.cardSuit === ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value) && 'clubs');
console.log (clubs);
// //   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //   spades:[],
// //     diamonds:[],
// //   hearts:[],
// //   clubs:[]
// // }
// =========================
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
