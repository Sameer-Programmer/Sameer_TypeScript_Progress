
 

let value = 1214;
let originalvalue = 1214
let largestvalueber =0 ;
let lastdigitt 
let reversee =0 
let count = 0 

for(value; value >0; value = Math.floor(value/10)){
  lastdigitt = value %10;
  reversee = (reversee*10)+lastdigitt
   count = count+1
  if(largestvalueber<lastdigitt){
    largestvalueber =lastdigitt  
  }
  
}

console.log(largestvalueber)
console.log(reversee)
console.log(count)

if(reversee ===originalvalue){
  console.log("value is palindrone")
}else {
      console.log(" value is NOT  palindrone")
}
