

// function regular() {
//   return 100
//   // return 200
// }

// console.log(regular())

function* genFun() {
  try {
    console.log('sachin')
    yield 100
    
  } finally {
    console.log('kohli')
    yield 200
  }
}

let genObj = genFun()
// console.log(genObj.next())
// console.log(genObj.return())
// console.log(genObj.next())

for (var value of genObj) {
  console.log(value)
}