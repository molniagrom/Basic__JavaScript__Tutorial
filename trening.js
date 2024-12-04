let user = {
    name: "Alina",
    age: 16,
    address: {
        city: {
            title: "Parkans"
        }
    }
}

// console.log(user["address"]["city"]["title"]);
// console.log(user.address.city.title)

// let city = {}

// city.title = "Tiraspol"
// console.log(city.title)

// let users = ["Alina", "Alena", "Yulia", "Misha"]
//
// console.log(users['map']((e) => e.toUpperCase()))

let userObject = {
    "0": "Alina",
    "1": "Alena",
    "2": "Yulia",
    "3": "Misha",
}
userObject[null] = "лялял"
console.log(Object.values(userObject))
// console.log(userObject[0])

// user["ляляля"] = "три рубля"
// console.log(user)
// console.log(user["ляляля"])
