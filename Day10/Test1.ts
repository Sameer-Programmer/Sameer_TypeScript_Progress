// Array in typescript 
/*
- An array is an special type of variable that stores multiple values
- The values can be of same data type or different data types
- index starts from zero
- Arrays can be declared using `[]`
- or the generic `Array<T>` type
- Arrays are an ordered collection of elements 
- in Typescript or Javascript array is dynamic

*/


let names:string[]=[];  //array declarration 

// Array -Initializatio 

/*names[0] ="sameer";
names[1] ="imran";
*/

let names1 :string [] = ["sameer","imran"];
console.log(names1);

let data: Array<string> = ["sameer", "Imran"]


console.log(data)

let mixeddata: Array<any> = ["sameer", "Imran", 1, true]
console.log(mixeddata)


let  twodata : Array < number | string> = ["sameer" , 1]
console.log(twodata)

