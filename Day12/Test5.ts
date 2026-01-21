
let folder2 : string  = " sameer , imran"

/*
split(delimeter )

- returns a Array -- 
- breaks the string in multiple Parts based on the Delimeter , returns an array 
- Split method basically returns a array 
*/

let words = folder2.split(" ") // this space comes between two words in a string
console.log(words)
// Example 2 

let Folderone : string = " sameermpn@gmail.com ,xyzabc";
console.log( Folderone.split(" ,"));
let Storage1 = Folderone.split(" ,");
console.log(Storage1[0])
