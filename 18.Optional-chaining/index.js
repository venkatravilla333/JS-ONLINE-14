

let person = {
  name: 'sachin',
  age: 40,
  address: {
    road: 101
  }
}

console.log(person)
// console.log(person.address1.road)

//ES-5
console.log(person && person.address1 && person.address1.road)

//ES-11
console.log(person.address1?.road)
