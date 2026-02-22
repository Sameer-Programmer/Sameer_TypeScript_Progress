// Array Declaration 

let namesOfPerson : string[] = ["sameer", "Imran "]
let mix : any[]= ["learning ",1,true,]

console.log(namesOfPerson)
console.log(mix)
console.log(namesOfPerson[0])  // to print the particilar index 

// find the length 
// Legth is not a method 

console.log(mix.length)

for(let i =0 ; i<mix.length ; i++){
    console.log(mix[i])
}

console.log("----------------")

for(let i in mix ){
      console.log(mix[i])
}
console.log("----------------")

for (let value of mix){
    console.log(value)
}
//tsx RevisonFolder\Day3_ArrayConncept\Test01.ts
