//what is DOM

//How to examine DOM

// console.dir(document)
// console.log(document)

//How to read DOM Properties (By using . operator)

// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.all)
// console.log(document.forms)
// console.log(document.links)

//How to access DOM elements into JS FILE

// ID

// let para1 = document.getElementById('one')

// console.log(para1)

//class

// let para1 = document.getElementsByClassName('myclass')
// console.log(para1[0])
// console.log(para1[1])
// para1.innerText = 'hello'
// para1.style.background = 'red'

//Tag

// var para = document.getElementsByTagName('p')
// console.log(para)

//querySelector

// var para = document.querySelector('#one')
// var para = document.querySelector('.myclass')
// var para = document.querySelector('p')
// console.log(para)

//querySelectorAll

// var para = document.querySelectorAll('#one')
// var para = document.querySelectorAll('.myclass')
// var para = document.querySelectorAll('p')
// console.log(para)


//Traversing of DOM

// var myDiv = document.getElementById('mydiv')
// console.log(myDiv)
// myDiv.style.background = 'yellow'

// //parent

// var parent = myDiv.parentElement
// console.log(parent)
// parent.style.background = 'red'

// // siblings

// var preSibling = myDiv.previousElementSibling
// console.log(preSibling)
// preSibling.style.background = 'green'

// var nextSibling = myDiv.nextElementSibling
// console.log(nextSibling)
// nextSibling.style.background = 'black'
// nextSibling.style.color= 'white'

// //Childs

// var firstChild = myDiv.firstElementChild
// console.log(firstChild)
// firstChild.style.background = 'blue'
// firstChild.style.color = 'white'

// var lastChild = myDiv.lastElementChild
// console.log(lastChild)
// lastChild.style.background = 'white'
// lastChild.style.color = 'blue'

// var childs = myDiv.children
// console.log(childs)
// console.log(childs[0])
// console.log(childs[1])
// console.log(childs[2])

//any child

// var ch = document.querySelector("#mydiv > *:nth-child(1)")
// console.log(ch)
// ch.style.color = 'red'


// DOM MANIPULATION

//ADD & UPDATE & DELETE


//ADDING
//How to create element

// var para = document.createElement('p')
// console.log(para)
// para.id = 'myid'
// para.className = 'myclass'

// para.innerText = 'This is para'

// var texNode = document.createTextNode('This is para')
// para.appendChild(texNode)

// var body = document.getElementById('body')

// body.appendChild(para)


// var h5 = document.createElement('h5')
// console.log(h5)
// h5.id = 'myh5'
// h5.className = 'myh5class'
// h5.textContent = 'This is heading 5'
// body.insertBefore(h5, para)

//Update

// var h2 = document.createElement('h2')
// console.log(h2)
// h2.id = 'myh2id'

// h2.innerText = 'This is heading 2'

// body.replaceChild(h2, h5)

//Delete

// para.remove()

// body.removeChild(para)


//How to add event to DOM elements

// var btn = document.getElementById('btn')
// console.log(btn)

// var btnFun = () => {
//   console.log('button clicked')
// }

// btn.addEventListener('click', btnFun)

// var btn = document.getElementById('btn')

// btn.remove()







