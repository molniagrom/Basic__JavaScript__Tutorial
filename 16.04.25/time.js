// let date = new Date();
//
// console.log(date)
//
// let year = String(zeroAdd(date.getFullYear()));
// let day = String(zeroAdd(date.getDate()));
// let month = String(zeroAdd(date.getMonth()));
//
// let hour = String(zeroAdd(date.getHours()));
// let minute = String(zeroAdd(date.getMinutes()));
// let second = String(zeroAdd(date.getSeconds()));
//
// function zeroAdd(num){
//     if (num >= 0 && num <= 9) {
//         return `0${num}`
//     } else {
//         return num
//     }
// }
//
// document.write(`${hour}.${minute}.${second}`)
// document.write(`${day}.${month}.${year}`)


// let str = '2025-12-31';
// console.log(str.split("-").reverse().join("."));

// function workOrWeekend(num) {
//     if (num === 0 || num === 6) {
//       return "Выходной"
//     } else {
//         return "Будний"
//     }
// }
//
// console.log(workOrWeekend(date.getDay()))
// console.log(date.getDay())
// console.log("До ближайшего воскресенья осталось: " + (6 - date.getDay()) + "дня")


// let months = [
//     'янв', 'фев', 'мар', 'апр', 'май',
//     'июн', 'июл', 'авг', 'сен', 'окт',
//     'ноя', 'дек'
// ];
//
// let date = new Date();
// let month = months[date.getMonth()];
// console.log(month);

// let date = new Date(2008, 0, 19); // установим
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср',
//     'чт', 'пт', 'сб'];
//
// console.log(days[day]);


// let now  = new Date();
// let date = new Date(2015, 11, 4, 23,
//     59, 59);
//
// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60));


// let date1 = new Date(1988, 2, 1);
// let date2 = new Date(2000, 0, 10);
//
// let diff = date2.getTime() - date1.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));


// let myBirthDay = new Date(2008, 0, 19); // 19 января 2008
// let now = new Date(); // текущая дата
//
// let yearsDiff = now.getFullYear() - myBirthDay.getFullYear();
// let monthsDiff = now.getMonth() - myBirthDay.getMonth();
//
// // Общая разница в месяцах
// let totalMonths = yearsDiff * 12 + monthsDiff;
//
// // Учитываем, прошёл ли день рождения в этом месяце
// if (now.getDate() < myBirthDay.getDate()) {
//     totalMonths--;
// }
//
// console.log(totalMonths);


// let myBirthDay = new Date(2008, 0, 19);  // 19 января 2008
// let now = new Date();  // текущая дата

// Разница в годах и месяцах
// let yearsDiff = now.getFullYear() - myBirthDay.getFullYear();
// let monthsDiff = now.getMonth() - myBirthDay.getMonth();
//
// // Если текущий день меньше дня рождения в этом году — вычитаем 1 месяц
// if (now.getDate() < myBirthDay.getDate()) {
//     monthsDiff--;
// }
//
// // Если месяцы уже отрицательные, скорректируем
// if (monthsDiff < 0) {
//     yearsDiff--;
//     monthsDiff += 12;  // добавляем 12 месяцев, так как месяц с минусом - это переход на предыдущий год
// }
//
// // Выводим результат
// console.log(`${yearsDiff} лет ${monthsDiff} месяцев`);

//...............................................................

// let date1 = new Date(2000, 8, 1);  // 1 сентября 2000
// let date2 = new Date(2010, 1, 15); // 15 февраля 2010
//
// let yearsDiff = date2.getFullYear() - date1.getFullYear();
// let monthsDiff = date2.getMonth() - date1.getMonth();
//
// let totalMonths = yearsDiff * 12 + monthsDiff;
//
// // Если месяцы отрицательные (например, февраль < сентябрь), скорректируем год
// if (monthsDiff < 0) {
//     totalMonths--; // уменьшаем на 1 месяц
// }
//
// // Если день в текущем месяце меньше, чем день в месяце начала отсчёта, вычитаем 1 месяц
// if (date2.getDate() < date1.getDate()) {
//     totalMonths--;
// }
//
// console.log(totalMonths);  // Это будет корректное количество месяцев

//.............................................................

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month, 0);
//     let day = date.getDay();
//     console.log(day)
// }
//
// getLastDayOfMonth(2025, 6)


//......................................................................

// function isLeap(year) {
//     let date = new Date(year, 2, 0);
//     if (date.getDate() === 29) {
//         console.log('високосный');
//     } else {
//         console.log('обычный');
//     }
// }
//
// isLeap(2028)


//......................................................................

// function checkDate(year, month, day) {
//     let date = new Date(year, month, day);
//
//     if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
//         console.log('корректна');
//     } else {
//         console.log('некорректна');
//     }
// }
//
// checkDate(2025, 0, 30)

//.................................................................

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31);
// console.log(date.getDay())

//...............................................................

// let now = new Date();
//
// let date = new Date(now.getFullYear(), now.getMonth()
//     - 1, now.getDate());
// console.log(date.getDay());

//324
























