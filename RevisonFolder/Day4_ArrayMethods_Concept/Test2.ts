// 7. splice()


//Description: Adds or removes elements at any position in the array.

//syntax  arrayname .splice (entryindex to delete, how many items to delete , Add ) // add is optional if you want to add any string or number

/*
| deleteCount | Meaning                                    |
| ----------- | ------------------------------------------ |
| 0           | Delete nothing                             |
| 1           | Delete 1 element                           |
| 2           | Delete 2 elements                          |
| Not given   | Delete all elements from startIndex to end |

 */

let elements2 : (number|string|boolean)[] = [1, "sameer", true, "Apple","Banana" ]

elements2.splice(1,2)  
// sameer , sameer and true will be deleted 
// from index 1 delete starts and anothe 2 indicates two items u are going to delete from tht index 
console.log(elements2)

//now to add 

elements2.splice(1,0,"Pine" ) // After 1 I am going to add , 0 means no deted 
console.log(elements2)
// is here zero indicated no deleted
// output
// [ 1, 'Pine', 'Apple', 'Banana' ]


// indexOf(1) Returns the index of the first occurrence of a value, or -1 if not found.

console.log(elements2.indexOf(1))

console.log(elements2.includes(1))  // if found true - if not found -- false 
console.log(elements2.includes(11))


let elements3 : (number|string|boolean)[] = [1, "sameer", true, "Apple","Banana" ]

console.log(elements3.toString())