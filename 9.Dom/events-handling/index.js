

// // let btn = document.getElementById('btn')
// // console.log(btn)

// // function buttonClick (){
// //   console.log('button clicked')
// // }

// // btn.addEventListener('click', buttonClick)


// var subchild = document.getElementById('subchild')
// var child = document.getElementById('child')
// var parent = document.getElementById('parent')
// console.log(subchild)
// console.log(child)
// console.log(parent)

// function subChildFun(e) {
//   console.log('sub child')
//   // console.log(e)
//   console.log(e.clientX)
//   console.log(e.clientY)
//   console.log(e.offsetX)
//   console.log(e.offsetY)
//   console.log(e.target)
//   // e.stopPropagation()

// }

// subchild.addEventListener('click', subChildFun, false)

// function childFun(e) {
//   console.log('child')
//   console.log(e)
//    e.stopPropagation()
// }

// child.addEventListener('click', childFun, false)

// function parentFun(e) {
//   console.log('parent')
//   console.log(e)
// }

// parent.addEventListener('click', parentFun, false)



//event delegation

var table = document.getElementById('table')

function tableClick(e) {
  console.log('clicked')
  console.log(e)
  console.log(e.target)
}

table.addEventListener('click', tableClick)

