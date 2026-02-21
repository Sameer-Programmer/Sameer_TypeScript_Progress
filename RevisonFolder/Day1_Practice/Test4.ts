//Check if a character is uppercase

console.log("test")

let x4 = "t"

if(x4 === x4.toUpperCase() && x4!==x4.toLowerCase()){
  console.log("uppercase")
}else {
  console.log("Notuppercase")
}


//Check if a number is a multiple of 10.

let x5 = 1

if(x5%10==0){
  console.log("Provided number is multiples of 10")
}else {
  console.log("Not-multiples of 10")
}

//5. Check if a number is positive, negative, or zero.


let x6 = -1

if(x6>0){
  console.log(" positive")
}else if (x6==0){
   console.log("zero")
}else {
  console.log("Negative")
}


//5. Check if a character is an uppercase vowel..


let x7:string  = "E"

if((x7==="A" || x7==="E") && (x7==x7.toUpperCase()) 
                        && (x7!==x7.toLowerCase())){
  console.log("given chareter is upper vowel ")
}


let x8:string  = "E"

if((x8=="A" || x8=="E"||  x8=="I" || x8=="O"  || x8=="U")) {
  console.log("given chareter is upper vowel ")
}


//  Check if a number is a multiple of both 5 and 10.


let x9 = 30;

if(x9%5 ==0 && x9%10==0){
  console.log("multiple of both 5 and 10")
}else {
  console.log("NOT multiple of both 5 and 10")
}


// Print the corresponding month name for a given month number.


let monthNumber = 4;

switch (monthNumber){
   case 1 : console.log("jan") ;
   break;
   
    case 2: console.log("Feb") ;
    break;
   
    case 3 : console.log("March") ;
    break;
   
    case 4 : console.log("April ") ;
    break;
   
   default :  console.log("Enter Number from 1 -12") ;
  
}
//Perform basic arithmetic operations based on user input..

let a =10;
let b =20;

let operator = "";

switch (operator){
  
  case "+" : console.log(a+b) ;
  break;
  case "-" : console.log(a-b) ;
  break;
  
  default : console.log("please enter the opertor + or - or / or *")
}


