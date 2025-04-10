// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];
//
// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);

//.........................................................

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
//
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
//
// console.log("Sum:", sum);

//.........................................................

// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
//
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
//
// console.log("Sum:", sum);

//.........................................................

// let arr = [
//     [1, 2, 3,
//         [4, 5,
//             [6, 7]
//         ]
//     ],
//     [8,
//         [9, 10]
//     ]
// ];
//
// console.log(
//     arr[0][0] +
//     arr[0][1] +
//     arr[0][2] +
//     arr[0][3][0] +
//     arr[0][3][1] +
//     arr[0][3][2][0] + // Accessing 6
//     arr[0][3][2][1] + // Accessing 7
//     arr[1][0] +      // Accessing 8
//     arr[1][1][0] +    // Accessing 9
//     arr[1][1][1]     // Accessing 10
// ); // Output: 55

//..........................................

// let arr = [[1, 2, 3, 4, 5], [6,
//     7, 8], [9, 10]];
//
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         console.log(elem);
//     }
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
//
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         sum += elem;
//     }
// }
// console.log(sum)


// let arr = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ];
//
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
//
// console.log("Sum:", sum);

// let arr = [[1, 2, 3], [4, 5], [6]];
//
// let sum = 0;
//
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
//
// console.log(sum)

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 1; k <= 5; k++) {
//             arr[i][j][k] = k
//         }
//     }
// }
//
// console.log(arr)


// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []; // исправила
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

//.....................................................................

// let arr = [];
//
// for (let i = 0, k = 2; i < 4; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(k);
//         k += 2;
//     }
// }
//
// console.log(arr);

//.....................................................................
// let exemp = [
//     [
//         [1, 2], [3, 4]
//     ],
//     [
//         [5, 6], [7, 8]
//     ]
// ]

// let arr = [];
// let count = 1
//
// for (let i = 0; i < 2; i++) {
//     arr[i] = []
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//         arr[i][j].push(count++)
//         arr[i][j].push(count++)
//     }
// }
//
// console.log(arr);

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++
//     }
// }
//
// console.log(arr);

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// let arr = [];
//
// for (let i = 0, k = 1; i < 3;
//      i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// let arr = [];
//
// for (let i = 0, k = 1; i < 3;
//      i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// let arr = [];
//
// for (let i = 0, k = 1; i < 3;
//      i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0, k = 1; i < 3;
//      i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

//............................................................

// let obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
//
// let sum = 0
//
// for (let key in obj) {
//     for (let key2 in obj[key]) {
//         sum += obj[key][key2]
//     }
// }
//
// console.log(sum)

// let obj = {
//     1: {
//         1: 'a1',
//         2: 'a2',
//         3: 'a3',
//     },
//     2: {
//         1: 'b1',
//         2: 'b2',
//         3: 'b3',
//     },
//     3: {
//         1: 'c1',
//         2: 'c2',
//         3: 'c3',
//     },
// }
// document.write(obj[2][1])
// document.write(obj[3][1])
// console.log(obj[2][2])
// console.log(obj[3][1])


// let obj = {
//     key1: {
//         a: 1, b: 2, c: {
//             d: 3,
//             e: 4,
//         },
//         f: 5,
//     },
//     key2: {
//         g: 6, h: 7,
//     },
// }
//
// console.log(obj.key1.a +
//     obj.key1.b +
//     obj.key1.c.d +
//     obj.key1.c.e +
//     obj.key1.f +
//     obj.key2.g +
//     obj.key2.h
// )

// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// }
//
// let sum = 0
//
// for (let key in obj) {
//     for (let key2 in obj[key]) {
//         sum += obj[key][key2]
//     }
// }
//
// console.log(sum)


// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// }
//
// let sum = 0
//
// for (let key in obj) {
//     for (let key2 in obj[key]) {
//         for (let key3 in obj[key][key2]) {
//             sum += obj[key][key2][key3]
//         }
//     }
// }
//
// console.log(sum)

//.....................................................................

// let students = {
//     'group1': ['name11', 'name12', 'name13'],
//     'group2': ['name21', 'name22', 'name23'],
//     'group3': ['name31', 'name32', 'name33'],
// };
//
// console.log(students['group3'][0])

//........................................................................


















