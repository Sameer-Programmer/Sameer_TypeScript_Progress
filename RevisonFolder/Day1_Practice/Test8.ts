//Write a program to reverse a given number using a while loop. 

let num =321; // initilization 
let reverse= 0 ;
let lastdigit 
console.log(num %10)

while(num > 0 ){ // condition 
  
  lastdigit = num %10;
  reverse = (reverse *10) + lastdigit
  num = Math.floor(num/10) // decrement 
  
}

console.log(reverse)