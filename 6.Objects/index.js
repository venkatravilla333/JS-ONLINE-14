// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'Mumbai',
//   address: {road: 101}
// }

//How to create object

//object literal syntax

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }



// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.play())

// var person2 = {
//   name: 'kohli',
//   age: 30,
//   play: function () {
//     console.log('play')
//   }
// }
// var person3 = {
//   name: 'dhoni',
//   age: 35,
//   play: function () {
//     console.log('play')
//   }
// }


// construtor function (ES-5)

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = function () {
//     console.log('play')
//   }
// }

// var person1 = new Test('sachin', 40)
// console.log(person1)
// var person2 = new Test('kohli', 30)
// console.log(person2)
// var person3 = new Test('dhoni', 35)
// console.log(person3)

//ES-6

// class Test{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }

// var person1 = new Test('sachin', 40)
// console.log(person1)
// var person2 = new Test('kohli', 30)
// console.log(person2)
// var person3 = new Test('dhoni', 35)
// console.log(person3)

// console.log(typeof Test) //

//Objects Dynamic

// let person = {
//   name: 'sachin',
//   age: 40
// }

//How to access object

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person['name'])
// console.log(person['age'])

//How to add new properties to existing object

// person.city = 'Mumbai'

// person.play = function () {
//   console.log('play')
// }

// console.log(person)

//How to update existing object values

// person.age = 45
// console.log(person)

//How to remove object properties

// delete person.city
// delete person.play
// console.log(person)


var person = {
  name: 'sachin',
  age: 40,
  color: 'red',
  city: 'Mumbai',
  height: 5,
  nums:[1,2,3,4,5],
  play: () => {
    console.log('Play')
  }
}

//Without using loop

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.color)
// console.log(person.city)
// person.play()

//With using loop

// for in

// for (var key in person) {
//   console.log(key, person[key])
// }


// let keys = Object.keys(person)
// console.log(keys)

// let values = Object.values(person)
// console.log(values)

// let entries = Object.entries(person)

// console.log(entries)

//Copy

//primitives

//Deep copy

// var x = 10

// var y = x

// console.log(x)
// console.log(y)
// y = 20
// console.log(x)
// console.log(y)

//Reference (object)

// import lodash from 'lodash'

// var lodash = require('lodash')

var originalObj = {
  name: 'sachin',
  address: { road: 101 },
  play: () => {
    console.log('Play')
  }
}

var copiedObj = originalObj // normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) // deep copy
// var copiedObj = lodash.cloneDeep(originalObj) // deep copy
// var copiedObj = Object.assign({}, originalObj) // shallow copy (ES-5)
// var copiedObj = {...originalObj} // shallow copy (ES-6)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(originalObj)
// console.log(copiedObj)














