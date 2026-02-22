// Lamda Function or Arrow Function

/*

//// Arrow-Functions/Lamda-Function

   Lambda refers to anonymous functions in programming.
   Lambda functions are a concise mechanism to represent anonymous functions.
   These functions are also called as Arrow functions.

   🎯 Interview Answer (Short Version)

Arrow functions provide shorter syntax and use lexical this, meaning they inherit this from their surrounding scope.

   There are 3 parts to a Lambda function.

   1. Parameters – A function may optionally have parameters
   2. The fat arrow notation/lambda notation (=>) – It is also called as the goes to operator
   3. Statements – represent the functions instruction set

   Syntax:

   let variable = (parameters) =>
   {
       // block of code
   }

   variable();
*/


// Void Type
let c3 = ()=> {
    console.log("Arrow function")
}


c3();


// Return 

let c4 = ():string => {
    return "sameer"
}
console.log(c4())


// RestParameters 

let c5 = (...elements:number[])=>{
    console.log(elements.length)
}

c5(4,5)


//
let c6 = (...elements:(number|string)[])=>{
    console.log(elements.length)
}

c6(4,5,"sameer","Imran")


/*

function -- Named , Anonymus , arrow ( void , return type) 
- Rest Parameters - (...elements:number[])
-default parameters -- (c:number =0 )  
// Here directly we will assign the default value 
// if we provide while giving input i will take if you dont provide it will assign this default vale

*/

// optional Parameters 

/*
- optional parameters always implement atlast
- this Optional parameter we have to handle with if condition due to undefined if we dont assign or provide the Optional value 
*/
let x13 = (a:number , b:number , c?:number)=>{
 
 if(c!==undefined){
     return a+b+c
 }else{
     return a+b 
 }
}

console.log(x13(11,2))


// default parameters always be at last 

// Confusion part is we should not provide question mark before ?: for c -- 
// ? mark indicates Optional 
// here it is Default Parameter -- we are assigning directly zero 

let y3 = (a: number, b: number, c: number = 0) => {
  return a + b + c;
}

console.log(y3(1,2))