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
















