//Problems

//Filter out even numbers from an array using filter.


let values = [1,2,3,4,5,6,7,8,9,10]

// let capture = values.filter(function(value){
//     return value % 2 ==0 
// })

// console.log(capture)

// console.log(values)

//Find the sum of all numbers using reduce.

// let capture2 = values.reduce(function(acc , cv){
//     return acc + cv
// })
// console.log(capture2)

//Check if at least one element is even using some.
let capture = values.some(function(value){
     return value % 2 ==0 
})
 console.log(capture)
let capture4 = values.every(function(value){
     return value % 2 ==0 
})
 console.log(capture4)

 