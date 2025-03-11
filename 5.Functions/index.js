


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

//scope

//global scope
//storage
// var a = 1
// let b = 2
// const c = 3

//access
// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

  //storage
  // var d = 4
  // let e = 5
  // const f = 6

  //access
  // console.log(a)
  // console.log(b)
  // console.log(c)
  // console.log(d)
  // console.log(e)
  // console.log(f)
  
  // if (true) {
   //storage
    // var g = 7
    // let h = 8
    // const i = 9

    //access
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)
  //   console.log(d)
  //   console.log(e)
  //   console.log(f)
  //   console.log(g)
  //   console.log(h)
  //   console.log(i)
  // }

  // console.log(g)
  // console.log(h)
  // console.log(i)
// }
// test()
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

//hoisting

//variabes
// console.log(a)
// const a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d = null
// console.log(d)

// console.log(e)
// var e
// console.log(e)

// console.log(f)
// var f = { name: 'kohli' }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// // h()
// var h = function test() {
//   console.log('named')
// }
// h()
// console.log(h)

// console.log(i)
// var i = function () {
//   console.log('anonymous')
// }
// i()
// console.log(i)

// console.log(j)
// // j()
// var j = () => {
//   console.log('arrow')
// }
// j()
// console.log(j)


// //function declaration

// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)
// declare()

//re-declaration

// var x = 10
// let x = 10
// const x = 10
// console.log(x)
// console.log(x)
// console.log(x)
// console.log(x)
// let x = 20
// const x = 20
// console.log(x)
// console.log(x)
// console.log(x)

//re-assignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)

// x = 30
// console.log(x)

//Initialization

// var x
// let x
// const x = 10
// console.log(x)


//closure

// function outer() {
//   var name = 'sachin'
//   function inner() {
//     console.log(name)
//   }
//   return inner
// }
// var inner = outer()
// inner()


// var x = 1

// function test() {
//   // console.log(x)
//    var x = 10
//   console.log(x)
// }
// console.log(x)
// test()


// {
//   var x = 10
//   let x = 10
//   console.log(x)
// }

// console.log(x)

//IIFE

// (function test() {
//   var a = 10
  
// })()
// console.log(a)

//Function currying


//without curry
// function test(a, b, c) {
//   console.log(a+b+c)
// }
// test(1, 2, 3)

//with curry

// function fun1(a) {
//   return function fun2(b){
//     return function fun3(c) {
//           console.log(a+b+c)
//         }
//   }
// }
// fun1(1)(2)(3)

//without curry

// function calDis(price, dis) {
//   var disAmout = price * dis
//   console.log(disAmout)
// }

// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)

//with curry

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmout = price*dis
//     console.log(disAmout)
//   }
// }

// var calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)



//first class function

// var x = function (cb) {
//   return function inner(){}
// }
// x(function cb(){})


// function hof(cb) {
//   console.log('test')
//   cb()
//   function inner() {
//     console.log('inner')
//   }
//   inner()
// }

// hof(function cb() {
//   console.log('cb')
// })


//pure function

// function pure(a,b,c) {
//   var result = a + b + c
//   console.log(result)
// }

// pure(1, 2, 3)
// pure(1, 2, 3)
// pure(1, 2, 3)

//impure

// function impure(a, b, c) {
//   var d = Math.random()*10
//   var result = a + b + c + d
//   console.log(result)
// }

// impure(1, 2, 3)
// impure(1, 2, 3)
// impure(1, 2, 3)


//function recurssion

// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);










 



