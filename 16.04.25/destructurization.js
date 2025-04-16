// let arr = ['John', 'Smit', 'development',
//     'programmer', 2000];
//
// let [name, surname, department, position, salary ] = arr;


// function func() {
//     return ['John', 'Smit', 'development',
//         'programmer', 2000];
// }
//
// let [name, surname, department, position, salary] = func();


// let arr = ['John', 'Smit', 'development',
//     'programmer', 2000];
//
// let [,, department, position] = arr
//
// console.log(department);
// console.log(position);


let arr = ['John', 'Smit', 'development',
    'programmer', 2000];

// let [name, surname, ...rest] = arr;
// console.log(name, surname);
// console.log(...rest);

// let [name, surname, department, position = "trainee"] = arr;


// function getDate() {
//     return (new Date).getDate();
// }
//
// function getMonth() {
//     return (new Date).getMonth();
// }
//
// function getFullYear() {
//     return (new Date).getFullYear();
// }
//
// let [year= getFullYear(), month = getMonth(), day = getDate()]
//     = arr;
//
// console.log(day, month, year);


// let options = {
//     color: 'red',
//     width:  400,
//     height: 500,
// };

// let {color, height, width} = options
//
// console.log(color);
// console.log(width);
// console.log(height);

// let {color: red, width: fo, height: sm} = options;
//
// console.log(red);
// console.log(fo);
// console.log(sm);


// let options = {
//     width: 400,
//     height: 500,
// };

// let {width, color= "black", height} = options
//
// console.log(color);
// console.log(height);
// console.log(width);

// let {color: c = "black", height, width} = options;
//
// console.log(c);
// console.log(height);
// console.log(width);

// function func([name, surname, department, position, salary]) {
//     console.log(name, surname, department, position, salary);
// }
//
// func(['John', 'Smit', 'development',
//     'programmer', 2000]);


// function func([name, surname, info, ...rest]) {
//     console.log(`${name}, ${surname}, ${info}`);
//     console.log(rest)
// }
//
// func( ['John', 'Smit', 'development',
//     'programmer', 2000] );


// function func([name, surname, department, position = "джуниор", ...rest]) {
//     console.log(name + ' ' + surname + ' ' + department + ' ' + position);
//     console.log(rest)
// }
//
// func( ['John', 'Smit', 'development']);


// function func(department, [name, surname], [year, month, day]) {
//     console.log(department)
//     console.log(name)
//     console.log(surname)
//     console.log(year)
//     console.log(month)
//     console.log(day)
// }
//
// func('development', ['John', 'Smit'], [2018, 12, 31]);


// function func({color = "black", width, height}) {
//     console.log(color, width, height);
// }
//
// func( {color: 'red', width: 400,
//     height: 500} );













