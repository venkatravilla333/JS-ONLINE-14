

// console.log(this)

// function test() {
//   console.log(this)
// }
// test()



// let person = {
//   name: 'sachin',
//   age: 40,
//   outer: ()=> {
//     // console.log(this)
//     var inner = ()=> {
//       // console.log(this)
//       var hello = ()=> {
//         console.log(this)
//       }
//       hello()
//     }
//     inner()
//   }
// }

// person.outer()


//constructor (ES-5)

// function Test (name, age) {
//   // console.log(this)
//   this.name = name;
//   this.age = age;
//   this.outer = ()=> {
//     // console.log(this)
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
//   }
// }
// let person = new Test('sachin', 40)

// person.outer()

//Classical (ES-6)

// class Test{
//   constructor(name, age) {
//     // console.log(this)
//     this.name = name;
//     this.age = age;
//     this.outer =  ()=> {
//       // console.log(this)
//       var inner = ()=> {
//         console.log(this)
//       }
//       inner()
//     }
//    }
// }

// var person = new Test('sachin', 40)
// person.outer()


// var person = {
//   name: 'sachin',
//   age: 40
// }

// function test(a,b,c) {
//   console.log(this)
//   console.log(a,b,c)
// }
// test(1,2,3)//window
// test.call(person, 1,2,3)//person
// test.apply(person, [1,2,3])//person
// test.bind(person, 1,2,3)()//person

// var person = {
//   name: 'sachin',
//   age: 40,
//   outer: function () {
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
//     // inner.call(person)
//     // inner.apply(person)
//     // inner.bind(person)()
//   }
// }

// person.outer()

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.outer = function () {
//     var inner =  ()=> {
//       console.log(this)
//     }
//     inner()
//     // inner.call(this)
//     // inner.apply(this)
//     // inner.bind(this)()
//   }
// }

// var person = new Test('sachin', 40)
// person.outer()


// class Test{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.outer = function () {
//       var inner = ()=> {
//         console.log(this)
//       }
//       inner()
//       // inner.call(this)
//       // inner.apply(this)
//       // inner.bind(this)()
//     }
//   }
// }

// var person = new Test('sachin', 40)
// person.outer()


//Math object

// console.log(Math)

// console.log(Math.min(12, 6, 10))
// console.log(Math.max(12, 6, 10))
// console.log(Math.ceil(10.1))
// console.log(Math.floor(10.9))
// console.log(Math.round(10.4))
// console.log(Math.round(10.5))
// console.log(Math.random()*100)
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(9))


//Date object

// var now = new Date()
// var now = new Date(2050, 10, 20, 10, 10, 5)
// var now = new Date("2045 12 3 10:20:30")
// console.log(now)

//get methods

// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//set methods

// now.setFullYear(2040)
// now.setMonth(6)
// now.setMinutes(30)
// now.setDate(20)
// console.log(now)

//Template string (ES-6)



