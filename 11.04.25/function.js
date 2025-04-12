// function name(name) {
//     console.log(name)
// }
//
// name('Ivan')

// function sumNum(a, b) {
//     let sum = 0
//     for (let i = a; i <= b; i++) {
//         console.log(sum += a)
//     }
// }
//
// sumNum(1, 100)

// function cube(num) {
//     return num ** 3
// }
//
// console.log(cube(2))

// function verification(num) {
//     if (num > 0) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// }

// function sumNum(a, b, c) {
//     console.log(a + b + c)
// }
//
// sumNum(1, 2, 3)

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
//
// function func(a, b, c){
//     console.log(a + b + c)
// }
//
// func(param1, param2, param3)

// function func(num = 5) {
//     console.log(num * num);
// }
//
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
//     console.log(num1 + num2);
// }
//
// func(2, 3);
// func(3);
// func();

// function funcCube(num) {
//     return num ** 3
// }
//
// let res = funcCube(3)
// console.log(res)

// function squareRoot(a) {
//     return Math.sqrt(a)
// }
//
// console.log(squareRoot(3) + squareRoot(4))

// function sqrt(num) {
//     return Math.sqrt(num);
// }
//
// function round(num) {
//     return num.toFixed(3);
// }
//
// console.log(
//     round(sqrt(2))
// )

// function sqrt(num) {
//     return Math.sqrt(num);
// }
//
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
//
// function round(num) {
//     return num.toFixed(3);
// }
//
// let res = round(sum(sqrt(2), sqrt(3), sqrt(4)))
//
// console.log(res)

// function func(num) {
//     if (num <= 0) {
//         return Math.abs(num);
//     } else {
//         return num ** 2;
//     }
// }
//
// console.log( func(10) );
// console.log( func(-5) );

// function func(num) {
//     if (num <= 0) {
//         return Math.abs(num);
//     }
//
//     return num ** 2;
// }
//
// console.log( func(10) );
// console.log( func(-5) );

// function func(num) {
//     let sum = 0;
//
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//
//     return sum;
// }
//
// console.log( func(5) );

// function func(num) {
//
//     let iterations = 0
//
//     while (num >= 10) {
//         iterations++
//         num = num / 2
//     }
//
//     return iterations;
//
// }
//
// console.log(func(100));

// function func(num1, num2) {
//
//     if (num1 > 0 && num2 > 0) {
//         return num1 * num2;
//     } else {
//         return num1 - num2;
//     }
// }
//
// console.log(func(3, 4));


// function isCount(arr) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i] % 2 !== 0) {
//             return false
//         }
//     }
//
//     return true
// }
//
// console.log(isCount([2, 4, 6, 8, 9, 10]))


//Флаги в функциях JavaScript №2

// function func(num){
//     let numStr = num.toString().split("")
//     let res = true
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] % 2 === 0) {
//             res = false
//         }
//     }
//     return res
// }
//
// console.log(func(135879))

// function verification(arguments) {
//     for (let i = 0; i < arguments.length; ++i) {
//         if (arguments[i] === arguments[i - 1]) {
//             return true
//         }
//     }
//     return false
// }

// verification([1, 2, 3, 3, 4, 5]) ? console.log('совпадения есть') : console.log('совпадений нет')

// function func(arr) {
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] === arr[i - 1]) {
//             return true; // Возвращаем true, если найдено совпадение
//         }
//     }
//     return false; // Возвращаем false, если совпадений не найдено
// }
//
// console.log(func([3, 3, 8, 6, 4, 7, 2]) ? "совпадения есть" : "совпадений нет");



























