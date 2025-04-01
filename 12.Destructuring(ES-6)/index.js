// var person = {
//   name: 'sachin',
//   age: 40,
//   address: { city: 'Mubai', road: 201 },
//   properties: [{cash: 100000, bats: 10, cars: 20}, {children: ['sara', 'arjun']}]
// }

// without destructure

// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)
// console.log(person.properties[0].cash)
// console.log(person.properties[0].bats)
// console.log(person.properties[0].cars)
// console.log(person.properties[1].children[0])
// console.log(person.properties[1].children[1])

//with destructuring

// let { name, age, address: { city, road }, properties: [{ cash, bats, cars }, { children: [c1, c2] }] } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(cash)
// console.log(cars)
// console.log(bats)
// console.log(c1)
// console.log(c2)


let array = ['sachin', { city: 'Mumbai', road: 201 }, { cash: 100000, bats: 20 }, { children: ['sara', 'arjun'] }]

// without dstructuring

// console.log(array[0])
// console.log(array[1].city)
// console.log(array[1].road)
// console.log(array[2].cash)
// console.log(array[2].bats)
// console.log(array[3].children[0])
// console.log(array[3].children[1])


// with dstructuring


let [name, {city, road}, {cash, bats}, {children: [c1, c2]}] = array
console.log(name)
console.log(city)
console.log(road)
console.log(cash)
console.log(bats)
console.log(c1)
console.log(c2)