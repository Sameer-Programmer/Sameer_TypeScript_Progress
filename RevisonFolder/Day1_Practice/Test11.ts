
//Print Prime Numbers between 1 and 50

let count1 = 0 
for(let i =2 ; i<50; i++ ){
    
    let isPrime = true 
    
    for (let j = 2 ; j <i ; j++){
        if(i%j == 0){
            isPrime = false
            break;
        }
    }
    
    
    
    if(isPrime){
        console.log(i)
        count1 = count1+1
    }
    
    
}
console.log(count1+"    count of Primenumbers ")
// Print Sum of Even Numbers between 1 and 20 
// Print Sum of Odd Numbers between 1 and 20 

let evenResult =0
let oddResult =0

for(let i =0 ; i<21; i++){
  
  if(i%2 ==0){
   evenResult = evenResult+i
  }else {
    oddResult = oddResult+i 
  }
  
  
  
  
}

console.log(evenResult+"    Evensum")
console.log(oddResult+"      odd sum")