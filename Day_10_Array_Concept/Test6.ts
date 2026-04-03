
// Passing an Array to a Function


let words : string [] = ["sameer" , 'j']

let result : string[] = [];

function m1(result : string [] , words : string []): void {
  
  
  for(let i in  words){
    result[i] = words[i].toUpperCase()
    console.log(result[i])
  }
  
  
}

m1(result , words)


// other scenario

let values17752260108331:string[] = ["Sameer","Imran","peera","Munni"]
let words17752260108331:string[] = []

for(let i  in  values17752260108331 ){
  words17752260108331[i] =  values17752260108331[i].toLowerCase()
  console.log(words17752260108331[i])
}




let values17752260108332:string[] = ["Sameer","Imran","peera","Munni"]
let words17752260108332:string[] = []

for(const value of values17752260108332){
    let lower = value.toLowerCase();
    words17752260108332.push(lower)
}
    
console.log(words17752260108332)