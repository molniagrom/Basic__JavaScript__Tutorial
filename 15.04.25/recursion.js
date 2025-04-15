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

let arr = [1, 2, 3, 4, 5];

function func(arr) {
    console.log(arr.shift(), arr)

    if (arr.length !== 0) {
        func(arr)
    }
}

func(arr)