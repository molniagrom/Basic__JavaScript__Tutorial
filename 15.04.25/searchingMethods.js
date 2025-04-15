// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arrNum.map(x => x ** 2));

// let sqrtArr = arrNum.map(x => Math.sqrt(x));
// console.log(sqrtArr);

//.......................................................

// let arrStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// let arrFruits = ["apple", "banana", "cherry", "mango", "orange"];

// console.log(arrStr.map(x => x + "!"));
// console.log(arrFruits.map(x => x.split("").reverse().join("")));

//.......................................................

// let arr = ['123', '456', '789'];
//
// console.log(arr.map(x =>
//     x.split('').map(y => Number(y))));

//.......................................................

// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arrNum.map((x, index) => x * index));

//.......................................................

// let sum = 0
// arrNum.forEach(x => sum += x ** 2)
// console.log(sum);

//.......................................................

// let mixedNumbers = [5, -3, 8, -1, 2, -7, 10, 50, -4];
// let mixedStrings = ["hello", "world", "javascript", "code", "example"];
// let arr = [1, 2, [3, 4], 5, [6, 7]]
// console.log(mixedNumbers.filter(x => x > 0));
// console.log(mixedNumbers.filter(x => x > 0 && x < 10));
// console.log(mixedStrings.filter(x => x.length > 5));
// console.log(mixedNumbers.filter((x, index) => (x * index) < 30));
// console.log(arr.filter(x => !Array.isArray(x)));

//.......................................................
// console.log(mixedNumbers.every(x => x > 0));
// console.log(mixedNumbers.every((x, index) => (x * index) < 30));
// console.log(mixedNumbers.some(x => x > 0));
// console.log(mixedNumbers.some((x, index) => (x * index) > 30));

//........................................................

// const people = [
//     { name: "Иван", age: 25 },
//     { name: "Мария", age: 35 },
//     { name: "Алексей", age: 28 },
//     { name: "Екатерина", age: 40 }
// ];
//
// console.log(people.find(x => x.age > 30) || null)

//........................................................

// const products = [
//     { name: "Телефон", price: 500 },
//     { name: "Ноутбук", price: 1200 },
//     { name: "Планшет", price: 800 },
//     { name: "Монитор", price: 1500 }
// ];

// console.log(products.findIndex(x => x.price > 1000))

//........................................................

// const purchases = [
//     { item: "Молоко", price: 80 },
//     { item: "Хлеб", price: 40 },
//     { item: "Сыр", price: 250 },
//     { item: "Яблоки", price: 100 }
// ];
//
// console.log(purchases.reduce((sum, item) => sum + item.price, 0));






















