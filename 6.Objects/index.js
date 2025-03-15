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


// var name = 'sachin'
// var age = 40

//ES-5
// console.log('Hi this is ' + name + ' my age is ' + '' + age)

//ES-6
// console.log(`Hi this is ${name} my age is ${age}`)

// var msg = ' Hi how are you '
// var msg = 'Hi how are You You'
// console.log(msg)

// console.log(msg.length)

//How to trim string

// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)
// console.log(msg.trim().length)

//How to extract / copy specific string

// console.log(msg.slice())
// console.log(msg.slice(0))
// console.log(msg.slice(4, 8))
// console.log(msg.slice(-3))

// console.log(msg.substring())
// console.log(msg.substring(0))
// console.log(msg.substring(4, 8))
// console.log(msg.substring(-3))

//Extracting a string character

// console.log(msg.charAt(0))
// console.log(msg.charAt(1))
// console.log(msg.charCodeAt(0))
// console.log(msg.charCodeAt(1))

//Case convertion

// console.log(msg.toUpperCase())
// console.log(msg.toLowerCase())


//How to replace specific string

// console.log(msg.replace('you', 'me'))
// console.log(msg.replaceAll('you', 'me'))

//How to add nw string to the end of existing string

// console.log(msg.concat(' sachin'))

//how to pad or add new string

// var msg = 'hello'
// console.log(msg.padStart(8, 5))
// console.log(msg.padEnd(8, 5))


//How to convert string into array

var msg = 'Hi how are you you'
// console.log(msg)

// console.log(msg.split())
// console.log(msg.split(''))
// console.log(msg.split(' '))


//How to find specific string

// console.log(msg.indexOf('you'))
// console.log(msg.indexOf('me'))
// console.log(msg.lastIndexOf('you'))
// console.log(msg.lastIndexOf('me'))
// console.log(msg.includes('you'))
// console.log(msg.includes('me'))
// console.log(msg.startsWith('Hi'))
// console.log(msg.startsWith('bye'))
// console.log(msg.endsWith('you'))
// console.log(msg.endsWith('me'))
// console.log(msg.repeat(3))



































