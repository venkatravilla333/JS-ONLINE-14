
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

















