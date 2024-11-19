"use strict";
// Основы

// alert("Привет, мир!");

// let num;
// num = 123;

// alert(num);

// different ways to declare a variable

// let a = 2,
//   b = 3,
//   c = 4;

// let a = 2;
// let b = 3;
// let c = 4;

// let a;
// let b;
// let c;

// a = 1
// b = 2
// c = 3

// let a = 10;

// alert(a);

// a = 20;

// alert(a);

// Mathematical operations with numbers in JavaScript

// let a = 1 + 2 + 3;
// alert(a);

// №1
// let a = 10;
// let b = 2;

// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)

// №2
// let c = 10;
// let d = 5;
// let result = c + d;

// alert(result)

// №3

// let a = 1;
// let b = 2;
// let c = 3;

// alert(a + b + c);

// №4

// let a = 10;
// let b = 5;

// let c = a - b;
// let d = 7;
// let result = c + d;

// alert(result);

// let a = 2 * (8 / 4);
// alert(a);

// let a = -16;

// alert(a);

// let a = 13;
// let b = 5;

// alert(a % b);

// let a = 2;
// let b = 3;

// let result = a ** b
// alert(3 * 2 ** 3 * 3)

// let myName = 'Alina'
// let lastName = 'Groza'

// alert(myName + " " + lastName)

// let java = "hello";
// let script = "world";

// alert(java.length);

// let str1 = -10;
// let str2 = 0;
// let str3 = 80;

// console.log(str1, "ляляля", [1,1,1], {name: "Alina"});

// let txt = `ааа ${str1} bbb ${str2} ccc`
// alert(txt);

// let str = str1 / str2;
// alert(str);

// const R = 12;
// const PI = 3.14;

// const L = 2 * PI * R;
// console.log(L);

// let a = "" + 3 + 1;
// alert(a);

// let a = "10"
// let b = "20"

// console.log(Number(a) + Number(b));
// alert( '2' + Number('3') );

// let a = +'2';
// let b = +'3';
// alert(a + b);

// let a = "5.5px";
// let b = "6.25px";

// alert(parseFloat(b) + parseFloat(a) + "px");

// let num1 = 1345;
// let num2 = 1;

// let sumNum1 = String(num1).length
// let sumNum2 = String(num2).length

// alert(sumNum1 + sumNum2)
// let test = Boolean(1 / 0);
// alert(test);

// let str = String(12345);
// alert(str[4] + str[3] + str[2] + str[1] + str[0]);

// alert(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

// let num = 4;

// alert(str[num]);
// let a = str[0];
// let b = str[1];
// let c = str[2];
// let d = str[3];
// let e = str[4];

// alert(String(e) + String(d) + String(c) + String(b) + String(a));

// let num = 1;
// num = num + 2;
// num = num + 3;

// alert(num);

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// let num = 10;
// num = num++;
// num = num++;
// num = num--;
// alert(num);

// debugger
// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);

// let a = 0.3 - 0.1;
// alert(a.toFixed(2));
// alert(a);

// let num1 = Number(prompt("Введите первую сторону квадрата"));
// let num2 = Number(prompt("Введите вторую сторону квадрата"));

// alert("Площадь квадрата: " + num1 * num2);

// let num1 = Number(prompt("Введите первую сторону прямоугольника"));
// let num2 = Number(prompt("Введите вторую сторону прямоугольника"));

// alert("периметр  прямоугольника: " + (num1 + num2 + num1 + num2));

// document.write("1<br>");
// document.write("2<br>");
// document.write("3<br>");
// document.write("4<br>");
// document.write("5<br>");

// let num1 = 1;
// let num2 = 2;
// let result = num1 + num2;
// console.log(`сумма: ${result}`);

// let a = 1;
// let b = 2;
// let c = 4;
// console.log(a + b + c);

// let num = '1238';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]);
// console.log(sum);

// let num = "123";
// console.log(num[0]);

// let a = 0;
// console.log(++a);

// let num = "123";
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = "123";
// // let str = String(num);
// console.log(num.length);

// let num = "123";
// let str = String(num);
// console.log(num[num.length - 1]);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);

// console.log(s);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;

// console.log(aaa + bbb + ccc);

// let sumSecondInDay = 24 * 60 * 60;
// let sumSecondIn30Day = 24 * 60 * 60 * 30;
// let sumSecondInYear = sumSecondIn30Day * 12 + 24 * 60 * 60 * 6;
// let sumMinutesInDay = 24 * 60;
// let sumMinutesInYear = sumMinutesInDay * 365;
// let QuantityByteInMegabyte = 1024 * 1024;
// let QuantityByteInGigabyte = 1024 * 1024 * 1024;
// let kilobytesInTerabyte = 1024 * 1024 * 1024;
// let QuantityByteInTerabyte = 1024 * 1024 * 1024 * 1024;
// let QuantityByteIn10Gigabyte = QuantityByteInGigabyte * 10

// console.log(sumSecondInDay);
// console.log(sumSecondIn30Day);
// console.log(sumSecondInYear);
// console.log(sumMinutesInDay);
// console.log(sumMinutesInYear);
// console.log(QuantityByteInMegabyte);
// console.log(QuantityByteInGigabyte);
// console.log(QuantityByteIn10Gigabyte);
// console.log(QuantityByteInTerabyte);
// console.log(kilobytesInTerabyte);

// let r = 4;
// let S = Math.PI *  Math.pow(r, 2)
// alert(S.toFixed(1))

// let a = 10;
// let S = a * a;
// alert(S);

// let a = 9;
// let b = 4;

// let P = 2 * (a + b);
// let S = a * b;
// alert(P);
// alert(S);

// let tc = 2;

// let fr = (9 / 5) * tc + 32;
// alert(fr);

// let tf = 78.2;
// let C = (5 / 9) * (tf - 32);
// alert(C.toFixed(0));
