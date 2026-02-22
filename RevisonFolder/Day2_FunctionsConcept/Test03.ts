// Lamda Function or Arrow Function

/*

//// Arrow-Functions/Lamda-Function

   Lambda refers to anonymous functions in programming.
   Lambda functions are a concise mechanism to represent anonymous functions.
   These functions are also called as Arrow functions.

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