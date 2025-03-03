

// var marks = 101

// if else

// if (marks < 35) {
//   console.log('Fail')
// } else if (marks >= 35 && marks < 60) {
//   console.log('second class')
// } else if (marks >= 60 && marks < 75) {
//   console.log('First class')
// } else if (marks >= 75 && marks <= 100) {
//   console.log('Distinction')
// } else {
//   console.log('Invalid marks')
// }

// switch case

var marks = 70

switch (marks) {
  case marks < 35:
    console.log('fail')
    break;
  case marks >= 35 && marks < 60:
    console.log('second class')
    break;
  case marks >= 60 && marks < 75:
    console.log('first class')
    break;
  case marks >= 75 && marks <= 100:
    console.log('distinction')
    break;
  default:
    console.log('Invalid marks')
}