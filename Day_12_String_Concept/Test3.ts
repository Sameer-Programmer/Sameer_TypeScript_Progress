/* 

below Concept Regarding String 

1. charAt(index) : what  it will do -It will take index as Parameter
2. indexOf(value) : 👉 Returns starting position of the word
3. substring(start,end) : In the string provide the index range 
4. includes(value) : it always Return true or false 

Notes -
substring will take starting index and ending index 
  starting index  count from 0 
ending index index  count from 1

// // includes():  returns True or false 
// // It is Case sensitive 
*/



let data_260403_1840: string = "sameer,Imran";
console.log(data_260403_1840.length) //12

console.log(data_260403_1840.charAt(0))  //s

//indexOf()
console.log(data_260403_1840.indexOf("ameer")) //1

// substring()
console.log(data_260403_1840.substring(0,5)) //samee
 console.log(data_260403_1840.includes("sameer"))// true
// case Sensitive
console.log(data_260403_1840.includes("SAMEER"))// false 


//delimeter
//let data_260403_1840: string = "sameer,Imran";
console.log(data_260403_1840)
let anotherArray = data_260403_1840.split(',')
console.log(anotherArray)