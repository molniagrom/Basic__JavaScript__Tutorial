// let funk = (function() {
//     let num = 1;
//     return function() {
//         console.log(num)
//         num++;
//         if(num === 6){
//             num -= 5
//         }
//     }
// })()
//
// funk();
// funk();
// funk();
// funk();
// funk();
// funk();
// funk();
// funk();
// funk();
// funk();

// let arr = [1, 2, 3, 4, 5];
//
// function func(arr) {
//     console.log(arr.shift(), arr)
//
//     if (arr.length !== 0) {
//         func(arr)
//     }
// }
//
// func(arr)

// function getSun(arr, index = 0) {
//   if (index >= arr.length) {
//       return 0
//   }
//   return arr[index] ** 2 + getSun(arr, index + 1)
// }
//
// console.log(getSun(arr))

// let obj = {
//     a: 1,
//     b: {
//         c: 2, d: 3, e: 4
//     },
//     f: {
//         g: 5, j: 6, k:
//             {
//                 l: 7, m:
//                     {
//                         n: 8, o: 9
//                     }
//             }
//     }
// }
//
// function getAllPrimitiveValuesToRecursion(obj) {
//     // let result = [];
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             getAllPrimitiveValuesToRecursion(obj[key])
//         } else {
//             console.log(obj[key])
//         }
//     }
//     return obj
// }
// console.log(getAllPrimitiveValuesToRecursion(obj))

// //..........................................................

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// let newArr = [];
//
// function func(arr) {
//     for (let arrElement of arr) {
//         if (typeof arrElement === 'object') {
//             func(arrElement)
//         } else {
//             newArr.push(arrElement)
//         }
//     }
//     return newArr
// }
//
// console.log(func(arr))

//.........................................................

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
//
// function getSum(obj) {
//     let result = 0;
//     for (let objKey in obj) {
//         if (typeof obj[objKey] === 'object') {
//             result += getSum(obj[objKey])
//         } else {
//             result += obj[objKey]
//         }
//     }
//     return result
// }
//
// console.log(getSum(obj))

//.........................................................

// let srr = ['a', ['b', 'c', 'd'], ['e', 'f',
//     ['g', ['j', 'k']]]]
//
// function func(arr, result = "") {
//     for (let arrElement of arr) {
//         if (Array.isArray(arrElement)) {
//             result = func(arrElement, result)
//         } else {
//             result += arrElement
//         }
//     }
//     return result
// }
//
// console.log(func(srr))

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
//
// function func(arr, result = 0) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result += func(arr[i]);
//         } else {
//             result += arr[i] ** 2;
//         }
//     }
//     return result;
// }
//
// console.log(func(arr));
