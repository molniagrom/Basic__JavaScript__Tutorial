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


// function func(a, b) {
//     return a !== b;
// }
//
// console.log(func(1, 1))

// function func(num) {
//     return num >= 0;
// }
//
// console.log(func(1))

// function getAverageScore(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//
//     return res / arr.length;
// }
//
// console.log(getAverageScore([5, 4, 5, 4, 5]))

// function average(arr) {
//     if (!Array.isArray(arr)) {
//         throw new TypeError("Argument must be an array.");
//     }
//     if (arr.length === 0) return 0;
//
//     const sum = arr.reduce((acc, val) => {
//         if (typeof val !== "number") {
//             throw new TypeError("All elements must be numbers.");
//         }
//         return acc + val;
//     }, 0);
//
//     return sum / arr.length;
// }

//..................................................................

// function getSumInArray(res, arr) {
//     if (!arr.every(elem => typeof elem === "number")) {
//         throw new TypeError("All elements must be numbers.");
//     }
//     return arr.reduce((acc, elem) => acc + elem, res);
// }
//
// function average(arr1, arr2) {
//
//     if (!Array.isArray(arr1 && arr2)) {
//         throw new TypeError("Argument must be an array.");
//     }
//     let [res1, res2] = [90, 57]
//
//     return getSumInArray(res1, arr1) / getSumInArray(res2, arr2)
// }
// console.log(average([5, 4, 5, 4, 5], [5, 4, 5, 4, 5]))

//..................................................................

// const getMultiplication = arr => arr.reduce((acc, elem) => acc * elem);
// console.log(getMultiplication([5, 4, 5, 4, 5]))

//..................................................................
// function func1(a) {
//     return a
// }
// function func2(b) {
//     return b
// }
//
// console.log( func1(3) + func2(5));


// function sum(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//     return res;
//
// }
//
// console.log(sum([1, 2, 3, 4, 5]));


// let arr = [1, 2, 3, 4, 5];
//
// function func(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//
//     return res;
// }


// function func1() {
//     return 3;
// }
// function func2() {
//     return 5;
// }
//
// console.log( func1() + func2() );


// let sumEl = sum([1, 2, 3, 4, 5]);
// console.log(sumEl);
//
// function sum(arr) {
//     let sum = 0;
//
//     for (let elem of arr) {
//         sum += elem;
//     }
//
//     return sum;
// }


// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
//
// function sum(arr) {
//     let sum = 0;
//
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }


// function add(num) {
//     if (num <= 9) {
//         return '0' + num;
//     }
//     return num;
// }
//
// console.log(add(7))


// let arr = [1, 2, 3, 4, 5];
//
// let sumEl = sum(arr);
// console.log(sumEl);
//
// function sum(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//
//     return res;
// }


// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
//
// function getDigitsSum(num) {
//     let arr = String(num).split('');
//     let sum = 0;
//
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//
//     return sum;
// }



// console.log(isPrime(13)); // должен вывести true
//
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }














