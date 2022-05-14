// 1)
alert("Привет, это работа Немченко Игоря!")
    //2
let ourPlanetName = "Земля";
let myAge = '27';
let carIsBroken = 'Citroen C5';
let colorHeader = 'green';
let isAdmin = 'Admin';
console.log(ourPlanetName);
console.log(myAge);
console.log(carIsBroken);
console.log(colorHeader);
console.log(isAdmin);
//3
const myName = 'Немченко Игорь';
console.log(`Привет, меня зовут ${myName}, мне ${myAge} лет`);
//4
let teacherName = prompt("Ваше имя?", "Имя");
console.log(`Мою работу проверяет ${teacherName}`);
//5
console.log(typeof "String");
console.log(typeof 2000);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
//6
let newStr = "37";

newStr = Number(newStr);
console.log(newStr);

newStr = Boolean(newStr);
console.log(newStr);

let newValue = true;

newValue = String(newValue);
console.log(newValue);

newValue = Number(newValue);
console.log(newValue);

let newNum = 2007;

newNum = String(newNum);
console.log(newNum);

newNum = Boolean(newNum);
console.log(newNum);
//7
let name = "Ivan";
let surname = name;
console.log(surname);