//Write a program to check if a given number is a prime number using a while loop


let num = 7;
let i = 2;

while (i<num){
    if(num %i  == 0 ){
        console.log( " not prime")
        break;
    }
    i++
}

if (i == num) {
    console.log(num + " is a Prime Number");
}