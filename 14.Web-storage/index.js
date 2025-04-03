

// console.log(window)

// //how to store

// let setBtn = document.getElementById('set')

// let setBtnFun = () => {
//   window.localStorage.setItem('name', 'sachin')
//   window.localStorage.setItem('age', 40)
// }

// setBtn.addEventListener('click', setBtnFun)

// //how to use/get value in app

// let getBtn = document.getElementById('get')
// let parent = document.getElementById('parent')

// document.getElementById
// let getBtnFun = () => {
//   console.log(window.localStorage.getItem('name'))
//   console.log(window.localStorage.getItem('age'))
//   let h4 = document.createElement('h4')
//   h4.innerText = window.localStorage.getItem('name')
//   parent.appendChild(h4)
// }

// getBtn.addEventListener('click', getBtnFun)

// //delete data from localstorage

// let deleteBtn = document.getElementById('delete')

// let deleteBtnFun = () => {
//   window.localStorage.removeItem('name')
//   window.localStorage.removeItem('age')
// }

// deleteBtn.addEventListener('click', deleteBtnFun)

// //how to remove all keys from locat storage

// let removeBtn = document.getElementById('remove')

// let removeBtnFun = () => {
//   window.localStorage.clear()
// }

// removeBtn.addEventListener('click', removeBtnFun)

//session storage

//how to store

let setBtn = document.getElementById('set')

let setBtnFun = () => {
  window.sessionStorage.setItem('name', 'sachin')
  window.sessionStorage.setItem('age', 40)
}

setBtn.addEventListener('click', setBtnFun)

//how to use/get value in app

let getBtn = document.getElementById('get')
let parent = document.getElementById('parent')

document.getElementById
let getBtnFun = () => {
  console.log(window.sessionStorage.getItem('name'))
  console.log(window.sessionStorage.getItem('age'))
  let h4 = document.createElement('h4')
  h4.innerText = window.sessionStorage.getItem('name')
  parent.appendChild(h4)
}

getBtn.addEventListener('click', getBtnFun)

// //delete data from localstorage

let deleteBtn = document.getElementById('delete')

let deleteBtnFun = () => {
  window.sessionStorage.removeItem('name')
  window.sessionStorage.removeItem('age')
}

deleteBtn.addEventListener('click', deleteBtnFun)

// //how to remove all keys from locat storage

let removeBtn = document.getElementById('remove')

let removeBtnFun = () => {
  window.sessionStorage.clear()
}

removeBtn.addEventListener('click', removeBtnFun)