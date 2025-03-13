

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
