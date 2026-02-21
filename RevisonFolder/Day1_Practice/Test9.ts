
//Write a program to 
//check if a given number is a prime number 
let num1 =7;
let i1 = 2 ;
let flag : boolean = true;

for(i1 = 2 ; i1<num1; i1++){
  
  if(num1 %i1 == 0){
    flag = false 
    break;
  }
  
}

  if(flag){
    console.log("prime")
  }else {
    console.log("Notprime")
  }
  

// Here just i am Checking as of now its fine right 
