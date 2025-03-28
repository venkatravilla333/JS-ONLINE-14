//get all

// let getAll = document.getElementById('getall')

// let getAllFun = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//      return res.json()
//     })
//     .then((data) => {
//       console.log(data)
//       let postsList = document.getElementById('postsList')
//       data.forEach(post => {
//         let childs = document.createElement('p')
//         childs.textContent = `${post.id} - ${post.title} - ${post.body}`
//         postsList.appendChild(childs)
//       })
      
//     }).catch((err)=>{console.log(err)})
  
  
// }

// getAll.addEventListener('click', getAllFun)

//get single

// let getsingle = document.getElementById('getsingle')

// let getsingleFun = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts/20')
//     .then((res) => {
//      return res.json()
//     })
//     .then((data) => {
//      console.log(data)
//   }).catch((err)=>{console.log(err)})
// }

// getsingle.addEventListener('click', getsingleFun)


//post request

let newData = {
  // userId: 1000,
  title: 'my title',
  // body: 'my body'
}

let send = document.getElementById('send')

let sendFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then((res) => {
      console.log(res)
      return res.json()
    }).then((data) => {
    console.log(data)
    }).catch((err) => {
    console.log(err.message)
  })
}

send.addEventListener('click', sendFun)

//update request

let update = document.getElementById('update')

let updateFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then((res) => {
      console.log(res)
      return res.json()
    }).then((data) => {
    console.log(data)
    }).catch((err) => {
    console.log(err.message)
  })
}

update.addEventListener('click', updateFun)


//delete request
let deleteBtn = document.getElementById('delete')

let deleteFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'DELETE',
    // headers: {
    //   'Content-type': 'application/json'
    // },
    // body: JSON.stringify(newData)
  })
    .then((res) => {
      console.log(res)
      return res.json()
    }).then((data) => {
    console.log(data)
    }).catch((err) => {
    console.log(err.message)
  })
}

deleteBtn.addEventListener('click', deleteFun)

