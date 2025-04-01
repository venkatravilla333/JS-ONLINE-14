

let timeout = setTimeout(() => {
  console.log('set timeout')
}, 4000)

let interval = setInterval(() => {
  console.log('set interval')
}, 4000)


let btnTimeout = document.getElementById('timeout')

let timeoutFun = () => {
  clearTimeout(timeout)
}

let btnClear = document.getElementById('interval')

let clearFun = () => {
  clearInterval(interval)
}

btnClear.addEventListener('click', clearFun)
