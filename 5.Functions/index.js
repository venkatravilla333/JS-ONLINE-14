


// var abc = 100
//How to define a function


//declaration

// function test() {
//   var a = 10
// }
// test()

//function exp

// named

// var x = function test() {
//   var b = 20
// }
// x()

//anonymous

// var y = function() {
//   var c = 30
// }
// y()

//arrow (ES-6)

// var z = ()=>{
//   var d = 40
// }
// z()

//parameters & arguments

// var a
// console.log(a)


//params & arguments

// function test(a, b, c) {
//   var x
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// test(1,2,3)

//Default parameter (ES-6)

// function test(a=null, b) {
//   console.log(a, b)
// }
// test(undefined, 200)

//varying no of params vs arguments


// function test(a,b,c) {
//   console.log(a + b + c)
//   console.log(arguments) //iterable DS
  // console.log(arguments[0])
  // console.log(arguments[1])
  // console.log(arguments[2])
  // console.log(arguments[3])
  // console.log(arguments[4])
//   console.log(Array.isArray(arguments))
//   var sum = 0
//   for (var value of arguments) {
//     sum += value
//   }
//   return sum
// }
// console.log(test(1, 2, 3, 4, 5))

// var test = ( x, ...a) => {
//   console.log(x)
//   console.log(a)
//   var sum = 0
  // console.log(a[0])
  // console.log(a[1])
  // console.log(a[2])
  // console.log(a[3])
  // console.log(a[4])
//   for (var value of a) {
//     sum += value
//   }
//   return sum
// }

// console.log(test(1, 2, 3, 4, 5))

 



