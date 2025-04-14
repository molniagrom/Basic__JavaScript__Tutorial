// function test() {
//     let num = 1;
//
//     return function() {
//         return num;
//     }
// }
//
// let num = 2;
// let func = test();
// console.log(func());


// function test() {
//     let num = 10;
//     return function () {
//         --num
//         if (num <= 0) {
//             return "отсчет окончен"
//         } else {
//             return num;
//         }
//     }
// }
//
// let func = test();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());


// function func() {
//     let num = 0;
//
//     return function() {
//         console.log(num);
//         num++;
//     };
// }
//
// let test = func;
//
// test()();
// test()();
// test()();


// function test() {
//     let counter = 0;
//
//     return function() {
//         return function() {
//             console.log(counter);
//             counter++;
//         };
//     };
// }
//
// let func = test();
//
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();



































































