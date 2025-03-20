
// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new items to array

// arr.push(6)
// console.log(arr)
// arr.unshift(0)
// console.log(arr)

// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(2, 0, 6)
// console.log(arr)

//How to remove array items

// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.splice(0, 1)
// arr.splice(arr.length-1, 1)
// arr.splice(2, 6)
// console.log(arr)

//How to remove all items from arrays.

// var copyArr = arr
// arr.length = 0
// arr.splice(0, arr.length)
// arr = []
// console.log(arr)
// console.log(copyArr)

//How to find array values

//primitives

// var arr = [1, 2, 3, 4, 5, 3]
// var arr = [{course: 'react'}, {course: 'node'},{course: 'css'}, {course: 'react'}]
// console.log(arr)

// console.log(arr.indexOf(3))
// console.log(arr.indexOf(30))
// console.log(arr.lastIndexOf(3))
// console.log(arr.lastIndexOf(30))
// console.log(arr.includes(3))
// console.log(arr.includes(30))
// console.log(arr.indexOf({course: 'css'}))
// console.log(arr.indexOf(30))
// console.log(arr.lastIndexOf(3))
// console.log(arr.lastIndexOf(30))
// console.log(arr.includes(3))
// console.log(arr.includes({course: 'css'}))
// console.log(arr.includes(30))

// console.log(arr.find((obj) => {
//  return obj.course === 'react'
// }))
// console.log(arr.findIndex((obj) => {
//  return obj.course === 'react'
// }))

// console.log(arr.findLast((obj) => {
//  return obj.course === 'react'
// }))

// console.log(arr.findLastIndex((obj) => {
//  return obj.course === 'react'
// }))

//How to merger two or more arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

// var x = 'sachin'
// console.log(arr1)
// console.log(arr2)

//ES-5 (concat)

// var combineArr = arr1.concat(arr2, arr3)
// console.log(combineArr)
//ES-6 (spread operator)
// var combineArr = [...arr1, ...arr2, ...arr3, ...x]
// console.log(combineArr)

//How to loop array values

// var arr = [1, 2, 3, 4, 5, 6]

//without using loop

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])

//with using loop

// for of loop

// for (var value of arr) {
//   console.log(value)
// }

// arr.forEach((v, i) => {
//       console.log(v, i)
// })

//Copy or clone

// var originalArr= ['sachin', { road: 101 }, () => { console.log('test') }]

// var copiedArr = originalArr//normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy (ES-5)
// var copiedArr = originalArr.slice() //shallow copy (ES-5)
// var copiedArr = [...originalArr]//shallow copy (ES-6)

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)

//testing of array items

// var arr = [1, 2, 3, 4, 5]

// var res = arr.some((item) => {
//        return item > 1
// })

// console.log(res)

// var res = arr.every((item) => {
//        return item > 1
// })

// console.log(res)

//How to convert array into string

// var arr = [1, 2, 3, 4, 5]
// console.log(arr, typeof arr)

// var str = arr.join('+')

// console.log(str, typeof str)

// var myArr = str.split()
// console.log(myArr, typeof myArr)

// var arr = [1, 2, 3, 4, 5]

// var arr = [{name: 'sachin', age: 40}, {name: 'dhoni', age: 35}, {name: 'kohli', age: 30}, {name: 'gill', age: 25}]

// console.log(arr)

// var resArr = arr.filter((obj) => {
//            return  obj.age <=30
// })

// console.log(resArr)


//How to  map array items with other value

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

// var mapRes = arr.map((item) => {
//       return  item * 100
// })

// console.log(mapRes)

//Reduce method

// var arr = [1, 2, 3, 4, 5]

// var reduceRes = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//   return cum+cur
// }, 0)

// console.log(reduceRes)

//How to remove dulpicate values from array

// var arr = [1, 2, 3, 4, 3, 5, 3]

// console.log(arr)

//Set with spread operator

// var uniqueArr = [... new Set(arr)]

// console.log(uniqueArr)

//indexOf

// var arr = [1, 2, 3, 4, 3, 5, 3]
// console.log(arr)
// var uniqueArr = [     ]

// function removeDuplicates(arr) {
//   console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//       uniqueArr.push(value)
//     }
//   }
// }

// removeDuplicates(arr)
// console.log(uniqueArr)


//How to flatten array

// var arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]]

// console.log(arr)

//flat (ES-11)

// var flattenArr = arr.flat(Infinity)
// console.log(flattenArr)

// var arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]]

// console.log(arr)
// var flattenArr = [       ]
// function flattenFun(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flattenFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }
// flattenFun(arr)
// console.log(flattenArr)


//map vs forEach


// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

// var mapRes = arr.map((item) => {
//   return item *100
// })

// console.log(mapRes)

// var foreachRes = arr.forEach((item) => {
//   return item*100
// })

// console.log(foreachRes)

//Sorting

//String

// var arr = ['sachin', 'dhoni', 'kohli']
// var arr = [2, 6, 1, 7, 4]
// var arr = [2, 600, 1, 17, 40]
// var arr = [{course: 'nodejs'}, {course: 'reactjs'}, {course: 'html'}]

// console.log(arr)

//ASC

// var asc = arr.sort()
// console.log(asc)

//DSC
// var dsc = arr.reverse()
// console.log(dsc)

// // ASC
// var asc = arr.sort()
// console.log(asc)

// // DSC
// var dsc = arr.reverse()
// console.log(dsc)

// ASC
// var asc = arr.sort((a, b) => {
//   return a-b
// })
// console.log(asc)

// DSC
// var asc = arr.sort((a, b) => {
//   return b-a
// })
// console.log(asc)


// ASC & DSC

// var asc = arr.sort((a, b) => {
//   if(a.course > b.course) return -1
//   if(a.course < b.course) return 1
// })
// console.log(asc)


// for (var i = 0; i < arr.length; i++){
//   for (var j = i + 1; j < arr.length; j++){
//     if (arr[i].course < arr[j].course) {
//       var temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
      
//     }
//   }
// }

// console.log(arr)


//Array.from()

// function test() {
//   console.log(arguments)
//   console.log(Array.isArray(arguments))
//   var arr = Array.from(arguments)
//   console.log(arr, Array.isArray(arr))
// }
// test(1, 2, 3, 4, 5)

// var arr = [1, 10, 3, 4, 5]

// var x = arr.at(2)
// var x = arr.at(-2)
// console.log(x)


































































