// check given number is prime or not

let num1 =7 ;
let isPrime = true;

for(let i =2 ; i<num1; i++){
    if(num1 % i ==0 ){
        isPrime =false;
        break ;
    }
}

if(isPrime && num1>1){
console.log("given number is prime")
}else {
    console.log("given number not  prime")

}
