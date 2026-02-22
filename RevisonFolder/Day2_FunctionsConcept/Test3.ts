
// Call back function 

/* 

 Key Interview Points

✔ Callback = function passed as argument
✔ Use (param: type) => returnType for function type
 (callback :(parameters of function does not write key word function 
 but to define the type of function we have show through => void or number based on return type )
✔ Do NOT use function keyword inside parameter type
✔ Avoid Function type
✔ Arrow functions use lexical this
✔ Default parameter is automatically optional

🎯 One-Line Strong Interview Answer

A callback in TypeScript is a strongly typed function passed as an argument,
 defined using function type syntax (parameters) => returnType to ensure type safety.

*/

function add(a:number , b:number){
  console.log(a+b)
}

function multiply(a:number , b:number){
  console.log(a*b)
}

function resultx(calcy : string ,a:number , b:number,callback1 : (a:number , b:number)=>void ,
       callback2 : (a:number , b:number)=>void ){
        console.log(calcy)
        callback1(a,b)                                      
        callback2(a,b)                                    
}

resultx("calcy",1,2,add,multiply)


/* 

function add(a: number, b: number) {
  return a + b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function result(
  calcy: string,
  callback1: (a: number, b: number) => number,
  callback2: (a: number, b: number) => number
) {
  console.log(calcy);
  console.log(callback1(1, 2));
  console.log(callback2(1, 2));
}

result("calcy", add, multiply);


/*
Explanation:

Here we are passing values (1,2) separately to both callbacks.
Instead, we can modify the function to pass the values once
and allow both callbacks to use the same values.

We are passing the "add" and "multiply" functions as callbacks.

Important Things to Remember:

1. A callback is a function that is passed as an argument 
   inside another function.

2. When defining the type of a callback parameter,
   we should NOT use the "function" keyword.

   Wrong:
   callback1: function add(a: number, b: number)

   Correct:
   callback1: (a: number, b: number) => number

3. (a: number, b: number) => number is called a function type.
   It defines:
   - The parameters the function accepts
   - The return type of the function

4. When passing a function as a parameter,
   TypeScript must know the return type.
   That is why we must specify:
   => number   (or => void depending on the function)

5. "=>" is called the arrow operator (or function type operator)
   when defining function types.
*/

