

//Prototype (Parent object)

// var x = {}

// console.log(x)
// console.log(x.toString())

// console.log(Object.getPrototypeOf(x))
// console.log(x.__proto__)
// console.log(Object.prototype)


// var y = {}
// console.log(y.toString())

// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y))

// let arr = []

// console.log(arr.push(100))
// console.log(arr)

// let arrayBase = Object.getPrototypeOf(arr)
// console.log(arrayBase)

// console.log(Object.getPrototypeOf(arrayBase))


// function Test(name) {
//   this.name = name;
//   this.play = function () {
//     console.log('play')
//   }
// }

// let obj1 = new Test('sachin')
// let obj2 = new Test('kohli')

// console.log(obj1.toString())

// console.log(obj1)
// console.log(obj2)

// console.log(Object.getPrototypeOf(obj1))
// console.log(Object.getPrototypeOf(obj2))

// console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2))


//Property descriptor


// let objectBase = Object.prototype

// let result = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(result)

// let keys = Object.keys(objectBase)

// for (var keys in objectBase) {
//   console.log(keys)
// }


let obj = {
  name: 'sachin',
  age: 40
}

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// let keys = Object.keys(obj)
// console.log(keys)

// delete obj.name

// console.log(obj)

// Object.defineProperty(obj, 'name', {
//   configurable: true,
//   enumerable: false,
//   writable: true
// })

// for (var keys in obj) {
//   console.log(keys)
// }

// delete obj.name

// console.log(obj)


//How to fine own members
// console.log(obj.hasOwnProperty('toString'))

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = function () {
//     this.go()
//     console.log('play')
//   }
// }

// let obj1 = new Test('sachin', 40)

// Test.prototype.go = function () {
//   // this.play()
//   console.log('go')
// }
// console.log(obj1)
// obj1.play()

// let keys = Object.keys(obj1)

// console.log(keys)

// for (var values in obj1) {
//   console.log(values)
// }


// function Wood(age) {
//   this.age = age
// }

// Wood.prototype.cut = function () {
//   console.log('Cut')
// }

// let w = new Wood(40)
// console.log(w)

// function Table(name, age) {
//   Wood.call(this,age)
//   this.name = name;
// }

// Table.prototype.cut = function () {
//   console.log('cut')
// }

// Table.prototype = Object.create(Wood.prototype)
// Table.prototype.constructor = Table

// let t1 = new Table('table', 50)
// console.log(t1.age)

// t1.cut()
// let t2 = new Table()


// function Chair(name) {
//   this.name = name;
// }

// Chair.prototype.cut = function () {
//   console.log('cut')
// }

// Chair.prototype = Object.create(Wood.prototype)
// Chair.prototype.constructor = Chair

// let c1 = new Chair('chair')
// console.log(c1)
// c1.cut()
// let c2 = new Chair()











