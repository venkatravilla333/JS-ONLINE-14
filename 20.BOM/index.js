

console.log(window)

// console.log(window.fetch())

// window.setTimeout(() => {
//   console.log('timeout')
// }, 4000)

// window.alert('Hello sachin')

// let value = window.prompt()

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// var value = window.confirm()

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// console.log(window.innerWidth)
// console.log(window.innerHeight)

// console.log(window.localStorage)

// console.log(window.sessionStorage)

// console.log(window.document)
// console.log(window.navigator)
// console.log(window.location)
// console.log(window.screen)
// console.log(window.history)


// let openBtn = document.getElementById('open')

// let myWin

// function openWin() {
//   myWin =  window.open("", "", "width = 50px, height = 100px")
// }

// openBtn.addEventListener('click', openWin)

// let closeBtn = document.getElementById('close')

// function closeWin() {
//   myWin.close()
// }

// closeBtn.addEventListener('click', closeWin)



// let moveBtn = document.getElementById('move')

// function moveWin() {
//   myWin.moveTo(100, 400)
// }

// moveBtn.addEventListener('click', moveWin)


// let resizeBtn = document.getElementById('resize')

// function resizeWin() {
//   myWin.resizeTo(400, 400)
// }

// resizeBtn.addEventListener('click', resizeWin)


//Document object

// console.log(window.document)

//navigator object

// console.log(window.navigator)
// console.log(window.navigator.appName)
// console.log(window.navigator.onLine)
// console.log(window.navigator.platform)
// console.log(window.navigator.language)

//screen object

// console.log(window.screen.width)
// console.log(window.screen.height)

//location object

// console.log(window.location.href)
// console.log(window.location.protocol)
// console.log(window.location.hostname)
// console.log(window.location.pathname)

// let loadBtn = document.getElementById('load')


// function loadFun() {
//   window.location.assign('https://www.google.co.in/')
// }
// loadBtn.addEventListener('click', loadFun)

//history object

// console.log(window.history)

let forwardBtn = document.getElementById('forward')

function forwardFun() {
  window.history.forward()
}

forwardBtn.addEventListener('click', forwardFun)

console.log(window.history.length)

