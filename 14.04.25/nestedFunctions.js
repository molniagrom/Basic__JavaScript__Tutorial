// function test(funk1, funk2, funk3){
//     console.log(funk1() + funk2() + funk3())
// }
//
// test(
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// )


// let funk1 = function(){
//     return 1
// }
//
// let funk2 = function(){
//     return 2
// }
//
// let funk3 = function(){
//     return 3
// }
//
// function test(funk1, funk2, funk3){
//     console.log(funk1() + funk2() + funk3())
// }
//
// test(funk1, funk2, funk3)

// function test(func) {
//     console.log(func(2,3));
// }
//
// let funk = function(num1, num2) {
//     return num1 + num2;
// }
//
// test(funk);

// function test(num, func1, func2) {
//     return func1(num) + func2(num);
// }
//
// console.log(
//     test(
//         3,
//         num => num ** 2,
//         num => num ** 2,
//     )
// )

// function test(arr, funk) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = funk(arr[i]);
//     }
//     return arr
// }
//
// console.log(test([1, 2, 3, 4, 5], num => num ** 2))


// function func(num1, num2) {
//
//     function square(num){
//         return num ** 2
//     }
//
//     function cube(num){
//         return num ** 3
//     }
//
//     return square(num1) + cube(num2);
// }
//
// console.log(func(2, 3))


// function test() {
//     let num;
//
//     function func() {
//         console.log(num);
//     }
//
//     num = 1
//     func();
//
//     num = 2
//     func();
// }
//
// test();

// function test(num1, num2) {
//     function func() {
//         console.log(num1 + num2);
//     }
//
//     num1 = 2;
//     func();
// }
//
// test(1, 2);


// function test(num) {
//     function func(localNum) {
//         num = 2;
//     }
//
//     func(num);
//     console.log(num);
// }
//
// test(1);


// function test(num) {
//     function func(num) {
//         console.log(num);
//     }
//
//     num = 2;
//     func(num);
// }
//
// test(1);


// function fun1() {
//     return function res() {
//         return 1
//     }
// }
//
// function fun2() {
//     return function res() {
//         return 2
//     }
// }
//
// console.log(fun1()() + fun2()())


// function func() {
//     return function () {
//         return function () {
//             return function () {
//                 return '!';
//             };
//         };
//     };
// }
//
// console.log(func()()()())


// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return [num1, num2, num3, num4]
//             }
//         }
//     }
// }
//
// console.log(func(2)(3)(4)(5))


// let numbers = [1, 2, 3, 4, 5];
// let strings = ["banana", "apple", "orange", "grape", "mango"];
//
// function each(arr, func) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(func(arr[i]))
//     }
//     return newArr
// }
//
// console.log(
//     each(numbers, num => num ** 2)
// )
//
// console.log(
//     each(strings, str => str.split('').reverse().join(''))
// )
//
// console.log(
//     each(strings, str => str[0].toUpperCase() + str.slice(1).toLowerCase())
// )

// function cube(num) {
//     return num ** 3;
// }
//
// console.log(each(numbers, cube))

// function filter(arr, callback) {
//     let res = [];
//
//     for (let elem of arr) {
//         if (callback(elem) === true) {
//             res.push(elem);
//         }
//     }
//
//     return res;
// }
//
// let result = filter([1, 2, 3, 4, 5],
//     elem => elem % 2 === 0
// );
