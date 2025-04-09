// If-else construct in JavaScript

// let num = 2;

// if (num == 0 || num > 1 && num < 5 ) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 3;
// let num2 = 3;

// if (!(num1 >= 0 || num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// if (num == 9 || ((num > 10 && num < 20) || (num > 20 && num < 30))) {
//   console.log("+++");
// } else {
//   console.log("---");
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 || (!test2 && !test3)) {
//   console.log("+++");
// } else {
//   console.log("---");
// }

// let test = 10;

// if (test > 0) console.log("+++");

// let day = 0;

// if (day <= 1 || day >= 31) {
//   console.log("mistake");
// }

// if (day >= 1 && day <= 10) {
//   console.log("first");
// } else if (day >= 10 && day <= 20) {
//   console.log("second");
// } else if (day >= 20 && day <= 30) {
//   console.log("third");
// }

// let num = 71;

// if (num >= 10 && num <= 99) {
//   let sum = Math.floor(num / 10) + (num % 10);

//   if (sum <= 9) {
//     console.log("сумма цифр однозначна: " + sum);
//   } else {
//     console.log("сумма цифр двухзначна: " + sum);
//   }
// } else {
//   console.log("Число вне диапазона от 10 до 99");
// }

// let lang = "en";

// switch (lang) {
//   case "ru":
//     console.log("рус");
//     break;
//   case "en":
//     console.log("анг");
//     break;
//   case "de":
//     console.log("нем");
//     break;

//   default:
//     console.log("язык не поддерживается");
// }

// let num = -1;
// let res = num >= 0 ? '1' : '2'
// console.log(res);

// let a = 2 ** 4;
// let b = 4 ** 2;

// console.log(a == b)

// let ok = confirm('Текст вопроса');
// console.log(ok);

// let age = confirm("Вам уже есть 18?");
// age ? alert("Доступ разрешён") : alert("Доступ запрещён");
// console.log(age)

// let age = 17;
// let adult;

// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }

// console.log(adult);

// let age = 19;
// let res;

// if (age >= 18) {
// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);

// let min = 36;

// if (min >= 0 && min <= 20) {
//   console.log("1 четверть");
// }

// if (min >= 21 && min <= 40) {
//   console.log("2 четверть");
// }

// if (min >= 41 && min <= 60) {
//   console.log("3 четверть");
// }

// ..................................................

// let arr = [1, 2, 3, 4];

// if (arr.length === 3) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   alert(sum);
// } else {
//   alert("Ничего");
// }

// let myName = 'Alina';
// let lowerStr = myName.toLowerCase()

// if (lowerStr[0] == 'a') {
// 	console.log('!');
// }

// let str = "jhroijhekbdfhepx";
// let lowerStr = str.toLowerCase();

// if (lowerStr[lowerStr.length - 1] === "x") {
//   console.log("!");
// }

// let str = "ajhroijhekbdfhepxb";
// let lowerStr = str.toLowerCase();

// if (lowerStr[0] === 'a' && lowerStr[lowerStr.length - 1] === "b") {
//   console.log("!");
// }

// let num = 10;
// let numToStr = String(num);

// if (numToStr[numToStr.length - 1] === "0") {
//   console.log("!");
// }

// let num = 12;
// let lastDigit = num % 10;

// if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
//   console.log("!");
// }

// let a = 12;
// let b = 2;
// let rest = a % b;

// if (rest === 0) {
//   console.log("делится нацело");
// } else {
//   console.log("делится с остатком " + rest);
// }

// let a = 13;

// if (a % 3 === 0) {
//   console.log("можно");
// } else {
//   console.log("нельзя");
// }

// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 1;
// let num2 = 2;

// console.log(num1);
// console.log(num2);

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// let numToStr = String(num)

// if (numToStr[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// // debugger
// let first = String(num)[0];

// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;
// let numToStr = String(num)

// if (numToStr.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;
// // debugger
// let str = String(num);

// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = '123033';
// // debugger
// let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
// let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

// let month = 12;

// if (month === 1 || month === 2 || month === 12) {
//   console.log("зима");
// } else if (month >= 3 && month <= 5) {
//   console.log("весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("осень");
// }

// let str = "abcde";

// if (str[0] === "a") {
//   console.log("да");
// }

// let num = 12345;
// let numToStr = String(num);

// if (numToStr[0] == 1 || numToStr[0] == 2 || numToStr[0] == 3) {
//   console.log("да");
// }

// let num = 123;
// let numToStr = String(num);

// console.log(Number(numToStr[0]) + Number(numToStr[1]) + Number(numToStr[2]));

// let num = 123033;
// let numToStr = String(num);

// // debugger
// let sum1 = Number(numToStr[0]) + Number(numToStr[1]) + Number(numToStr[2]);
// let sum2 = Number(numToStr[3]) + Number(numToStr[4]) + Number(numToStr[5]);

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }


//..........................................................................................




