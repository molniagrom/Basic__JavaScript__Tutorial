// forOf - for array

/*let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    console.log(elem);
}*/

//....................................

// forIn - for object
/*
let obj = {x: 1, y: 2, z: 3};*/

/*for (let key in obj) {
    console.log(key);
}*/

/*for (let objKey in obj) {
    console.log(obj[objKey]);
}*/

//....................................

/*let num = 1
// будет выполняться пока условие истино
while (num <= 100) {
    console.log(num)
    num++
}*/

/*
let num2 = 11
// будет выполняться пока условие истино
while (num2 <= 33) {
    console.log(num2)
    num2++
}
*/


/*
let num3 = 10
let i = 0;

while (num3 <= 1000) {
        num3 = num3 * 3
        i++
}

console.log(num3)
console.log(i)
*/

//............................................

/*for (let i = 0; i <= 100; i++) {
        console.log(i)
}

for (let i = 11; i <= 33; i++) {
        console.log(i)
}*/

/*for (let i = 0; i <= 100; i += 2) {
        console.log(i)
}*/

/*for (let i = 1; i <= 99; i += 2) {
        console.log(i)
}*/
/*for (let i = 100; i >= 0; i--) {
        console.log(i)
}*/

/*
let arr = ['a', 'b', 'c', 'd', 'e'];
*/

/*for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
}*/

/*for (let i = 1; i < arr.length - 1; i++) {
        console.log(arr[i]);
}*/

/*for (let i=  arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
}*/

//...........................................

/*let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr.length; i++) {
        console.log(i);
}*/

//.............................................

/*
let arr = [2, 5, 9, 15, 1, 4];

for (let number of arr) {
        if (number > 3 && number < 10) {
                console.log(number);
        }
}
*/

/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let objKey in obj) {
        if (objKey % 2 !== 0) {
                console.log(obj[objKey]);

        }
}*/

/*let res = 0
for (let i = 2; i <= 100; i += 2) {
       res += i
    console.log(res)
}
console.log(res)*/

/*let res = 0
for (let i = 1; i <= 99; i += 2) {
    res += i
    console.log(res)
}
console.log(res)*/

/*
let res = 1
for (let i = 1; i <= 20; i++) {
    res = res * i
    console.log(res)
}

console.log(res)
*/

/*let arr = [2, 5, 9, 3, 1, 4]
let res = 0
/!*debugger*!/
for (let element of arr) {
    res += element
}
console.log(res)*/

/*let arr = [2, 5, 9, 3, 1, 4, 8];
let res = 0

for (let element of arr) {
    if (element % 2 === 0) {
        res += element;
        console.log(`я нашёл чётное число: ${element}`);
    }else{
        console.log(`я нашёл нечётное число: ${element}`);
    }
}
console.log(res)*/

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0

for (let element of arr) {
    let kv = element ** 2;   // квадрат текущего элемента
    res += kv;                // добавление квадрата к общей сумме
    console.log(`Квадрат числа ${element} равен ${kv}, промежуточная сумма: ${res}`);
}

console.log('Итоговая сумма квадратов: ' + res);*/

/*
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;

for (let element of arr) {
    res = res * element;
    console.log(`Текущий элемент: ${element}, произведение до этого шага: ${res}`);
}

console.log(`Итоговое произведение всех элементов массива: ${res}`);
*/

/*let str = ``

for (let i = 1; i <= 5; i++) {
    str += "-"
}

console.log(str)*/

/*let str = ``

for (let i = 1; i <= 9; i++) {
    str += i
}

console.log(str)*/

/*let str = ``

for (let i = 9; i >= 1; i--) {
    str += i
    console.log(str)
}

console.log(str)*/
/*
let str = ``

for (let i = 1; i <= 9; i++) {
    if(i === 1){
        str += `-${i}-`
    } else {
        str += `${i}-`
    }
}

console.log(str)*/

/*
for (let i = 10; i < 1000; i++) {
    let srt = String(i)

    if (srt[0] === "1"){
        console.log(i)
        console.log(srt[0])
    }
}
*/

/*for (let i = 10; i < 1000; i++) {
    let srt = String(i)
        console.log(`сумма первой и второй цифры: ${srt[0] + srt[1]}`)
}*/

/*
for (let i = 10; i < 1000; i++) {
    let srt = String(i)

    if (srt[0] === "1"){
        console.log(i)
    } else {
        console.log('...')
    }
}
*/

/*
for (let i = 10; i < 1000; i++) {
    let srt = String(i)

    if (Number(srt[0]) + Number(srt[1]) === 5){
        console.log(`${Number(srt[0])} + ${Number(srt[1])} = 5`)
        console.log(i)
    } else {
        console.log('...')
    }
}
*/

//..............................................

/*let arr = [1,2,3,4,5,6,7,8,0,9]

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        break;
    }
    console.log(arr[i])
}*/

/*

let arr = [1,2,3, -24, 4,5,6,7,8,0,9]
let res = 0

for (let i = 1; i < arr.length; i++) {
    res += arr[i]

    if(arr[i] <= 0) {
        break;
    }

    console.log(res)
}
*/

/*let arr = [1,2,3, -24, 4,5,6,7,8,0,9]

for (let i = 0; i < 5; i++) {
    console.log(arr[i])
    if (  arr[i] === 3 ) {
        console.log(`позиция первого числа 3: ${arr[i] - 1}`)
        break
    }
}*/

/*
let res = 0
for (let i = 1; i <= 100; i++) {
   res += i
    if (res > 100) {
        console.log(i)
        break
    }
}
*/

/*for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}*/

/*for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++){
        document.write(` ${i}${j} `);
    }
}*/

// let arr = []
//
// for (let i = 0; i < 10; i++) {}

//....................................................


// let obj = {x: 1, y: 2, z: 3};
//
// let keys = Object.keys(obj);
// console.log(keys);


// let obj = {x: 1, y: 2, z: 3};
//
// console.log('x' in obj);
// console.log('w' in obj);

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;
//
// console.log('x' in obj);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr1[0] = 'a';
// console.log(arr2);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr1[0] = 'a';
// arr2[1] = 'b';
//
// console.log(arr1);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr1[0] = 'a';
// arr2[0] = 'b';
//
// console.log(arr2);


// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);

// let res;
//
// if (true) {
//     res = '!';
// }
//
// console.log(res);


// let num = 5;
// let res;
//
// if (num >= 0) {
//      res = 1;
// } else {
//      res = 2;
// }
//
// console.log(res);


// let age = 17;
// let adult
//
// if (age >= 18) {
//      adult = true;
// } else {
//      adult = false;
// }
//
// console.log(adult);


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(`${i}${j} `)
//     }
// }

// let arr = [0, -8, 40, 93, 75, -96, -86]
// let newArr = []
//
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > 0){
//         newArr.push(arr[i])
//     }
//
// }
//
// console.log(newArr)



































