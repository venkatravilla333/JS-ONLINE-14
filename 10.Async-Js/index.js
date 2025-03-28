

// console.log('one')

// setTimeout(() => {
//   console.log('timer-1')
// }, 2000)

// console.log('three')

// Promise.resolve().then(() => console.log('PR-1')).then(() => console.log('PR-2'))

// setTimeout(() => {
//   console.log('Timer-2')
// }, 4000)

// console.log('bye')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 0)

//Callback

// function fetchData(num, cb) {
//   setTimeout(() => {
//     // let data = 'sachin'
//     let data = num*num
//     // return data
//     cb(data)
//    }, 4000)
// }

// fetchData(2, function displayData(data1) {
//   console.log(data1)
//      fetchData(data1, function displayData(data2) {
//         console.log(data2)
//          fetchData(data2, function displayData(data3) {
//            console.log(data3)
//            fetchData(data3, function displayData(data4) {
//              console.log(data4)
//                fetchData(data4, function displayData(data5) {
//                 console.log(data5)
//                 })
//              })
//          })
//     })
// })

// // function displayData(data) {
// //   console.log(data)
// // }

// // displayData()


//Promises (ES-6)

// function fetchData(num) {
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//           //  let data = 'sachin'
//            let data = num*num
//            res(data)
//     }, 4000)
// })
// }

// fetchData(2).then(function displayData(data1) {
//   console.log(data1)
//   return fetchData(data1)
// }).then(function displayData(data2) {
//   console.log(data2)
//   return fetchData(data2)
// }).then(function displayData(data3) {
//   console.log(data3)
//   return fetchData(data3)
// }).then(function displayData(data4) {
//   console.log(data4)
//   return fetchData(data4)
// }).then(function displayData(data5) {
//       console.log(data5)
// })

//async await (ES-6)

// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // let data = 'sachin'
//       let data = num*num
//       res(data)
//       }, 4000)
//   })
// }


// async function displayData() {
//   let data1 = await fetchData(2)
//   console.log(data1)
//   let data2 = await fetchData(data1)
//   console.log(data2)
//   let data3 = await fetchData(data2)
//   console.log(data3)
//   let data4 = await fetchData(data3)
//   console.log(data4)
// }
// displayData()

// let pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR-1')
//   }, 4000)
// })
// let pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR-2')
//   }, 3000)
// })
// let pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR-3')
//   }, 2000)
// })


// Promise.race([pr1, pr2, pr3]).then((res)=>{ console.log(res)})
// Promise.all([pr1, pr2, pr3]).then((res)=>{ console.log(res)})
// Promise.allSettled([pr1, pr2, pr3]).then((res)=>{ console.log(res)})







