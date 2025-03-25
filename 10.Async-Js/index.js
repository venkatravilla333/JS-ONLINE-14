

console.log('one')

setTimeout(() => {
  console.log('timer-1')
}, 2000)

console.log('three')

Promise.resolve().then(() => console.log('PR-1')).then(() => console.log('PR-2'))

setTimeout(() => {
  console.log('Timer-2')
}, 4000)

console.log('bye')

setTimeout(() => {
  console.log('Timer-3')
}, 0)
