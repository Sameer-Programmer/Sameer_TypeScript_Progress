// Print Numbers Divisible by 3 and 5 from 1 to 100 
//  Write a program to check 
//if a given number is a prime number using a while loop.  
  
  
  let givenNumber = 72;
  let isPrime = true;
  
  for(let i = 2; i<givenNumber;i++ ){

    if(givenNumber % i == 0){
      isPrime = false;
      break;
    }

    
  }

     if(isPrime == true){
      console.log("given number is prime")
    }else {
      console.log("given number is not  prime")
    }
  

