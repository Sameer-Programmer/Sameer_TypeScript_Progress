/* 
we have many methods in Array 
push()- to add - at last 
pop () - to remove the last element 
shift () - to remove First Element 
unshift() - to add at First element 
concat () - to add two arrays 
indexOf(1) Returns the index of the first occurrence of a value, or -1 if not found.
includes() - if found true - if not false 
toString() -- To convert Array to string 
slice () - From the Original array if we need some part with index 
slice ()

// Strating index starts from zero
// Ending index will be eclusive - n-1 
// syntax = slice (start , end )


*/

let elements1 : (number|string|boolean)[] = [1, "sameer", true ]


console.log(elements1)
console.log(typeof elements1)

elements1.push()
// Add Element at last  inside method we should pass some thing if we wont pass what will happen- Array will remain same  
console.log(elements1 + "        push")  

elements1.push(3)
console.log(elements1 + "        push")  


elements1.pop()
console.log(elements1) // Remove element at Last 

elements1.shift()
console.log(elements1) // Remove element at First


elements1.unshift("Apple")
console.log(elements1) // ADD  element at First

// To add two Arrays

let e2 = [1,2]
let e3 = ["sameer","imran"]

let result3 = e2.concat(e3) 
//The red mark under e3 is because of a TypeScript type mismatch.- later while running Js - des not care - typescript makes inference 
console.log(result3) 


//let elements1 : (number|string|boolean)[] = [1, "sameer", true ]

console.log(elements1+"        present") 
console.log(typeof elements1)
let result_slice = elements1.slice(0,3) //(start =0, end = 3-1 = 2)
console.log(elements1) 