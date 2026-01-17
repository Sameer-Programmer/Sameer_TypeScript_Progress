/*
// 6. slice() - Extracts a section of an array
// Starting index starts from zero
// Ending index will be exclusive.
// Ex: If 3 is the ending index, it will consider 2 (3 - 1 = 2)
// Syntax: array.slice(start, end)

*/

// methods in Array 

/*
1) push () - adds  single/multiple elements to the end of an array 
2) pop () - remove the last element 
3) shift()-remove the first element 
4) unshift()--add single or multiple  elemeents in the bigning 
5) concat() -- It will combine two or more arrays of same datatype
6) slice (start , end) -- end --n-1 

*/
// example 


let basket3  : number[] = [1,2,3,4,5,6]; 

let value = basket3.slice(0,5)
console.log(value)
