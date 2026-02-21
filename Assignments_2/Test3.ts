// Print prime number 1-100
//Prime number >1
//number which should be divisible by 1 and itself but not others 


for(let i = 1; i<101; i++){
    let isPrime  = true;
    if(i>1){
        for(let j = 2;j<i;j++){
            if(i%j=== 0){
              isPrime   = false;  
            }
        }

    }else {
      let isPrime : boolean = false;  
    }


    if(isPrime = true){
        console.log(i)
    }

    


}